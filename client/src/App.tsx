import { Switch, Route, Redirect } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import ApplyPage from "@/pages/ApplyPage";
import MaturityTestPage from "@/pages/MaturityTestPage";
import VibeCodingPage from "@/pages/VibeCodingPage";
import PromptEngineeringPage from "@/pages/PromptEngineeringPage";
import ProposalPage from "@/pages/ProposalPage";
import DarePillarsPage from "@/pages/DarePillarsPage";
import DareOsLifecyclePage from "@/pages/DareOsLifecyclePage";
import PacksPage from "@/pages/PacksPage";
import PackDetailPage from "@/pages/PackDetailPage";
import ReferenceRepoPage from "@/pages/ReferenceRepoPage";
import AntiPatternsPage from "@/pages/AntiPatternsPage";
import AgentsMcpPage from "@/pages/AgentsMcpPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RedirectPackDetail from "@/components/RedirectPackDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/aplicar" component={ApplyPage} />
      <Route path="/aplicar/pilares" component={DarePillarsPage} />
      <Route path="/aplicar/teste-maturidade" component={MaturityTestPage} />
      <Route path="/aplicar/vibe-coding" component={VibeCodingPage} />
      <Route path="/aplicar/prompt-engineering" component={PromptEngineeringPage} />
      {/* TEMPORARILY HIDDEN: <Route path="/aplicar/proposta" component={ProposalPage} /> */}
      <Route path="/aplicar/wizard">
        <Redirect to="/aplicar/teste-maturidade" />
      </Route>
      <Route path="/aplicar/dare-os" component={DareOsLifecyclePage} />
      <Route path="/aplicar/packs/:levelId" component={PackDetailPage} />
      <Route path="/aplicar/packs" component={PacksPage} />
      <Route path="/aplicar/referencia" component={ReferenceRepoPage} />
      <Route path="/aplicar/anti-padroes" component={AntiPatternsPage} />
      <Route path="/aplicar/agentes" component={AgentsMcpPage} />
      {/* Redirects legados para compatibilidade */}
      <Route path="/wizard">
        <Redirect to="/aplicar/teste-maturidade" />
      </Route>
      <Route path="/dare-os">
        <Redirect to="/aplicar/dare-os" />
      </Route>
      <Route path="/packs/:levelId" component={RedirectPackDetail} />
      <Route path="/packs">
        <Redirect to="/aplicar/packs" />
      </Route>
      <Route path="/referencia">
        <Redirect to="/aplicar/referencia" />
      </Route>
      <Route path="/anti-padroes">
        <Redirect to="/aplicar/anti-padroes" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <div className="flex flex-col min-h-screen">
        <Header />
        <Router />
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
