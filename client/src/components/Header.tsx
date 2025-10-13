import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Configuração de navegação
  const navItems = [
    { href: "#about", label: "Sobre" },
    { href: "#framework", label: "Framework" },
    { href: "#recursos", label: "Recursos" },
    { href: "#vantagens", label: "Vantagens" },
    { href: "#manifesto", label: "Manifesto" },
    { href: "#contribute", label: "Contribuir" }
  ];

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
            <nav className="hidden md:ml-10 md:flex md:space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href
                      ? scrolled
                        ? 'text-primary font-semibold'
                        : 'text-white font-semibold'
                      : scrolled
                        ? 'text-gray-700 hover:text-primary hover:bg-gray-50'
                        : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <motion.span
                      layoutId="activeSection"
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 rounded-full ${
                        scrolled ? 'bg-primary' : 'bg-white'
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>
          </div>
          
          {/* CTA e controles */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://github.com/guigonzalez/dare-framework" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Github className="h-5 w-5" />
            </a>
            
            {/* Mobile menu toggle */}
            <button 
              type="button" 
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className={`md:hidden p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
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
              className={`block py-2.5 px-4 mb-1 text-base font-medium rounded-md ${
                scrolled 
                  ? 'text-gray-700 hover:text-primary hover:bg-gray-50' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
