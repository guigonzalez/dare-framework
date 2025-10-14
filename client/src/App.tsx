import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import ApplyPage from "@/pages/ApplyPage";
import MaturityTestPage from "@/pages/MaturityTestPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/aplicar" component={ApplyPage} />
      <Route path="/aplicar/teste-maturidade" component={MaturityTestPage} />
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
