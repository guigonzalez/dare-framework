import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [location] = useLocation();

  // Detectar em qual página estamos
  const isHomePage = location === "/";
  const isApplyPage = location === "/aplicar";
  const isDarePillarsPage = location === "/aplicar/pilares";
  const isVibeCodingPage = location === "/aplicar/vibe-coding";
  const isPromptEngineeringPage = location === "/aplicar/prompt-engineering";
  // TEMPORARILY HIDDEN: const isProposalPage = location === "/aplicar/proposta";
  // TEMPORARILY HIDDEN: const isMaturityTestPage = location === "/aplicar/teste-maturidade";

  // Configuração de navegação para HomePage
  const homeNavItems = [
    { href: "/#about", label: "Sobre" },
    { href: "/#framework", label: "Framework" },
    { href: "/#recursos", label: "Recursos" },
    { href: "/#vantagens", label: "Vantagens" },
    { href: "/#agents", label: "Agentes" },
    { href: "/#manifesto", label: "Manifesto" },
    { href: "/#contribute", label: "Contribuir" }
  ];

  // Configuração de navegação para ApplyPage
  const applyNavItems = [
    { href: "/aplicar#about", label: "Visão Geral" },
    { href: "/aplicar#aplicacoes", label: "Aplicações" },
    { href: "/aplicar/pilares", label: "4 Pilares DARE" },
    { href: "/aplicar/vibe-coding", label: "Vibe Coding" },
    { href: "/aplicar/prompt-engineering", label: "Prompt Engineering" }
    // TEMPORARILY HIDDEN: { href: "/aplicar#modelos", label: "Modelos" }
  ];

  // Configuração de navegação para DarePillarsPage
  const darePillarsNavItems = [
    { href: "/aplicar", label: "← Voltar" },
    { href: "/aplicar/pilares#decisao", label: "Decisão" },
    { href: "/aplicar/pilares#automacao", label: "Automação" },
    { href: "/aplicar/pilares#relevancia", label: "Relevância" },
    { href: "/aplicar/pilares#engajamento", label: "Engajamento" }
  ];

  // Configuração de navegação para VibeCodingPage
  const vibeCodingNavItems = [
    { href: "/aplicar", label: "← Voltar" },
    { href: "/aplicar/vibe-coding#introducao", label: "Introdução" },
    { href: "/aplicar/vibe-coding#vibe-loop", label: "Vibe Loop" },
    { href: "/aplicar/vibe-coding#ferramentas", label: "Ferramentas" },
    { href: "/aplicar/vibe-coding#prompts", label: "Estrutura de Prompts" }
  ];

  // Configuração de navegação para PromptEngineeringPage
  const promptEngineeringNavItems = [
    { href: "/aplicar", label: "← Voltar" },
    { href: "/aplicar/prompt-engineering#anatomia", label: "Anatomia do Prompt" },
    { href: "/aplicar/prompt-engineering#workflows", label: "Workflows" },
    { href: "/aplicar/prompt-engineering#templates", label: "Templates" },
    { href: "/aplicar/prompt-engineering#troubleshooting", label: "Troubleshooting" }
  ];

  // TEMPORARILY HIDDEN - ProposalPage navigation
  /*
  const proposalNavItems = [
    { href: "/aplicar", label: "← Voltar" },
    { href: "/aplicar/proposta#calculadora", label: "Calculadora" },
    { href: "/aplicar/proposta#beneficios", label: "Benefícios" },
    { href: "/aplicar/proposta#planos", label: "Planos" },
    { href: "/aplicar/proposta#faq", label: "FAQ" }
  ];
  */

  // TEMPORARILY HIDDEN - MaturityTestPage navigation
  /*
  const maturityTestNavItems = [
    { href: "/aplicar", label: "← Voltar" },
    { href: "/aplicar/teste-maturidade#teste", label: "Fazer Teste" },
    { href: "/aplicar/teste-maturidade#sobre", label: "Sobre o Teste" }
  ];
  */

  // Escolher os itens de navegação baseado na página
  let navItems = homeNavItems;
  if (isApplyPage) navItems = applyNavItems;
  else if (isDarePillarsPage) navItems = darePillarsNavItems;
  else if (isVibeCodingPage) navItems = vibeCodingNavItems;
  else if (isPromptEngineeringPage) navItems = promptEngineeringNavItems;
  // TEMPORARILY HIDDEN: else if (isProposalPage) navItems = proposalNavItems;
  // TEMPORARILY HIDDEN: else if (isMaturityTestPage) navItems = maturityTestNavItems;

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Detect active section
      const sections = navItems.map(item => {
        const id = item.href.replace('#', '');
        return document.getElementById(id);
      });

      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(navItems[index].href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md' 
          : 'bg-black/70 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo e menu principal */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center group">
              <motion.div
                className={`p-1.5 mr-2 rounded-lg ${scrolled ? 'bg-primary/10' : 'bg-white/10'}`}
                whileHover={{ rotate: 12, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg className={`h-6 w-6 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M12 6V11M12 16V11M12 11H16M12 11H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              <span className={`text-lg font-bold transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                DARE Framework
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:ml-10 md:flex md:space-x-1 items-center">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href && isHomePage
                      ? scrolled
                        ? 'text-primary font-semibold underline decoration-2 underline-offset-4 decoration-primary'
                        : 'text-white font-semibold underline decoration-2 underline-offset-4 decoration-white'
                      : scrolled
                        ? 'text-gray-700 hover:text-primary hover:bg-gray-50'
                        : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* CTA e controles */}
          <div className="flex items-center space-x-3">
            <a
              href="/aplicar"
              className={`hidden md:inline-flex items-center px-4 py-2 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 ${
                scrolled
                  ? 'bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md focus:ring-primary'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm focus:ring-white/50'
              }`}
            >
              Aplicar o DARE
            </a>

            <a
              href="https://github.com/guigonzalez/dare-framework"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver repositório no GitHub"
              className={`p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 ${
                scrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-400'
                  : 'text-white hover:bg-white/10 focus:ring-white/50'
              }`}
            >
              <Github className="h-5 w-5" />
            </a>
            
            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              className={`md:hidden p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 ${
                scrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-400'
                  : 'text-white hover:bg-white/10 focus:ring-white/50'
              }`}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-200 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`py-3 px-3 shadow-md ${
          scrolled
            ? 'bg-white'
            : 'bg-black/90 backdrop-blur-md'
        }`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block py-3 px-4 mb-1 text-base font-medium rounded-md transition-all duration-200 active:scale-98 ${
                scrolled
                  ? 'text-gray-700 hover:text-primary hover:bg-gray-50 active:bg-gray-100'
                  : 'text-white hover:bg-white/10 active:bg-white/20'
              }`}
              style={{ minHeight: '44px' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile CTA Section */}
          <div className={`mt-3 pt-3 border-t ${
            scrolled ? 'border-gray-200' : 'border-white/10'
          }`}>
            <a
              href="/aplicar"
              className={`flex items-center justify-center gap-2 py-3.5 px-4 text-center font-semibold rounded-lg transition-all duration-300 shadow-sm active:scale-95 ${
                scrolled
                  ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-md'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Aplicar o DARE
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="https://github.com/guigonzalez/dare-framework"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 py-2.5 px-4 mt-2 text-center text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Github className="h-4 w-4" />
              Ver no GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
