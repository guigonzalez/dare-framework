import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import {
  Menu,
  X,
  Github,
  ChevronDown,
  Layers,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  frameworkNavItems,
  dareOsNavItems,
  guiasNavItems,
  aplicarSubNavByPage,
} from "@/data/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const isApplySubPage = location.startsWith("/aplicar/");
  const applySubNav = aplicarSubNavByPage[location];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const dropdownTriggerClass = `hidden md:inline-flex items-center px-4 py-2 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 ${
    scrolled
      ? "text-gray-700 hover:text-primary hover:bg-gray-50"
      : "text-white hover:bg-white/10 focus:ring-white/50"
  }`;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-black/70 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center group">
              <motion.div
                className={`p-1.5 mr-2 rounded-lg ${scrolled ? "bg-primary/10" : "bg-white/10"}`}
                whileHover={{ rotate: 12, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg
                  className={`h-6 w-6 transition-colors ${scrolled ? "text-primary" : "text-white"}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L4 6V18L12 22L20 18V6L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V11M12 16V11M12 11H16M12 11H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <span
                className={`text-lg font-bold transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
              >
                DARE Framework
              </span>
            </a>

            <nav className="hidden md:ml-6 md:flex md:items-center md:gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger className={dropdownTriggerClass}>
                  <Layers className="h-4 w-4 mr-1.5" />
                  Framework
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[180px]">
                  {frameworkNavItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <a href={item.href} className="flex items-center gap-2 cursor-pointer">
                        {item.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className={dropdownTriggerClass}>
                  <BookOpen className="h-4 w-4 mr-1.5" />
                  DARE OS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[200px]">
                  {dareOsNavItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <a href={item.href} className="flex items-center gap-2 cursor-pointer">
                        {item.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className={dropdownTriggerClass}>
                  Guias
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[200px]">
                  {guiasNavItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <a href={item.href} className="flex items-center gap-2 cursor-pointer">
                        {item.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/guigonzalez/dare-framework"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver repositório no GitHub"
              className={`p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 ${
                scrolled
                  ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-400"
                  : "text-white hover:bg-white/10 focus:ring-white/50"
              }`}
            >
              <Github className="h-5 w-5" />
            </a>
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              className={`md:hidden p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 ${
                scrolled
                  ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-400"
                  : "text-white hover:bg-white/10 focus:ring-white/50"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`py-3 px-3 shadow-md ${
            scrolled ? "bg-white" : "bg-black/90 backdrop-blur-md"
          }`}
        >
          <a
            href="/"
            className={`block py-3 px-4 mb-1 text-base font-medium rounded-md ${
              scrolled ? "text-gray-700 hover:bg-gray-50" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Início
          </a>
          <p className={`px-4 pt-3 pb-1 text-xs font-semibold ${scrolled ? "text-gray-500" : "text-white/70"}`}>
            Framework
          </p>
          {frameworkNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block py-2.5 px-4 text-sm font-medium rounded-md ${
                scrolled ? "text-gray-700 hover:bg-gray-50" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <p className={`px-4 pt-4 pb-1 text-xs font-semibold ${scrolled ? "text-gray-500" : "text-white/70"}`}>
            DARE OS
          </p>
          {dareOsNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block py-2.5 px-4 text-sm font-medium rounded-md ${
                scrolled ? "text-gray-700 hover:bg-gray-50" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <p className={`px-4 pt-4 pb-1 text-xs font-semibold ${scrolled ? "text-gray-500" : "text-white/70"}`}>
            Guias
          </p>
          {guiasNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block py-2.5 px-4 text-sm font-medium rounded-md ${
                scrolled ? "text-gray-700 hover:bg-gray-50" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          {isApplySubPage && applySubNav && applySubNav.some((i) => i.href.includes("#")) && (
            <>
              <p
                className={`px-4 pt-4 pb-1 text-xs font-semibold ${
                  scrolled ? "text-gray-500" : "text-white/70"
                }`}
              >
                Nesta página
              </p>
              {applySubNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block py-2.5 px-4 text-sm font-medium rounded-md ${
                    scrolled
                      ? "text-gray-700 hover:bg-gray-50"
                      : "text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
