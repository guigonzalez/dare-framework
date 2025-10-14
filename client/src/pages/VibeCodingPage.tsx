import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Code, Repeat, Bug, Wrench, Play, Zap, ChevronDown, BookOpen, Lightbulb, Rocket, Users, Brain, Palette, Wind, Heart } from "lucide-react";

const tools = [
  {
    name: "Cursor",
    icon: Code,
    description: "O Rei do Code Completion",
    bestFor: "Desenvolvimento profissional, refactoring, debugging complexo",
    differential: "Entende contexto completo do projeto",
    commands: ["⌘K (gerar código)", "⌘L (chat contextual)", "⌘I (editar)"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Replit Agent",
    icon: Rocket,
    description: "O Planejador Estratégico",
    bestFor: "MVPs, projetos do zero, full-stack rápido",
    differential: "Faz perguntas estratégicas antes de começar a codar",
    commands: ["Discovery → Planning → Implementation → Testing → Deploy"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    name: "Claude 3.5 Sonnet",
    icon: Brain,
    description: "O Arquiteto de Software",
    bestFor: "Arquitetura de sistemas, análise técnica profunda",
    differential: "Excelente para decisões arquiteturais e explicações detalhadas",
    commands: ["Code review", "Performance", "Segurança", "Refactoring"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "V0 by Vercel",
    icon: Palette,
    description: "O Designer de UI",
    bestFor: "Componentes React, interfaces modernas, design systems",
    differential: "Gera componentes otimizados com Tailwind CSS e shadcn/ui",
    commands: ["UI/UX profissional", "Responsividade", "Acessibilidade"],
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    name: "Windsurf",
    icon: Wind,
    description: "O Nativo de IA",
    bestFor: "Desenvolvimento AI-first, performance crítica",
    differential: "Primeiro IDE verdadeiramente nativo de IA",
    commands: ["Contexto completo de workspace", "Integração profunda"],
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    name: "Lovable",
    icon: Heart,
    description: "O App Builder Completo",
    bestFor: "Apps completos do zero, deploy automático",
    differential: "Gera frontend + backend + DB + deploy em um prompt",
    commands: ["React", "Node.js", "Autenticação", "Pagamentos", "Deploy"],
    gradient: "from-pink-500 to-rose-500"
  }
];

const useCases = [
  { icon: Rocket, case: "MVP/Startup", tools: "Replit Agent → Lovable" },
  { icon: Wrench, case: "Refactoring Legacy", tools: "Cursor → Claude 3.5" },
  { icon: Palette, case: "UI/UX Development", tools: "V0 → Cursor" },
  { icon: Code, case: "Backend/APIs", tools: "Claude 3.5 → Cursor" },
  { icon: Bug, case: "Debugging Complexo", tools: "Cursor → Claude 3.5" },
  { icon: Users, case: "Full-Stack App", tools: "Lovable → Replit Agent" },
  { icon: Zap, case: "Performance Critical", tools: "Windsurf → Claude 3.5" }
];

export default function VibeCodingPage() {
  const [openPromptType, setOpenPromptType] = useState<string | null>(null);

  const togglePromptType = (type: string) => {
    setOpenPromptType(openPromptType === type ? null : type);
  };

  return (
    <main className="flex-grow bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section id="introducao" className="relative py-16 sm:py-24 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Guia Completo 2025
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Vibe Coding: O Futuro do Desenvolvimento
              </h1>
              <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                A metodologia revolucionária que transforma descrições em linguagem natural em código funcional usando IA
              </p>
              <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
                Cunhada por Andrej Karpathy em 2025, o Vibe Coding foca no "o que quer" ao invés do "como implementar"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vibe Loop Section */}
      <section id="vibe-loop" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                O Vibe Loop - Metodologia Core
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                O coração do vibe coding é um ciclo iterativo de 5 etapas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: 1, icon: Code, title: "PROMPT", description: "Descrever o que você quer em linguagem natural", color: "blue" },
                { step: 2, icon: Play, title: "RUN", description: "Executar o código gerado pela IA", color: "green" },
                { step: 3, icon: Bug, title: "BREAK", description: "Identificar o que não funciona ou falta", color: "orange" },
                { step: 4, icon: Wrench, title: "FIX", description: "Corrigir problemas com novos prompts específicos", color: "purple" },
                { step: 5, icon: Repeat, title: "REPEAT", description: "Iterar até atingir a perfeição desejada", color: "cyan" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 border-2 border-${item.color}-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-${item.color}-500 text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg`}>
                      {item.step}
                    </div>
                    <Icon className={`w-6 h-6 text-${item.color}-600 mb-3`} />
                    <h4 className={`font-bold text-${item.color}-900 mb-2 text-lg`}>{item.title}</h4>
                    <p className={`text-sm text-${item.color}-700`}>{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="ferramentas" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <Zap className="w-4 h-4 mr-2" />
                Ferramentas Essenciais
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                As 6 Ferramentas de 2025
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cada ferramenta tem seu contexto ideal e diferencial único
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                    <p className="text-sm font-semibold text-primary mb-3">{tool.description}</p>

                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-xs font-semibold text-gray-700 mb-1">✨ Melhor para:</p>
                        <p className="text-xs text-gray-600">{tool.bestFor}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-700 mb-1">🎯 Diferencial:</p>
                        <p className="text-xs text-gray-600">{tool.differential}</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {tool.commands.map((cmd, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                            {cmd}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Prompt Structures Section */}
      <section id="prompts" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Estruturas de Prompt por Contexto
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Templates prontos para diferentes situações de desenvolvimento
              </p>
            </motion.div>

            <div className="space-y-4">
              {/* Debugging */}
              <div className="bg-white rounded-xl border-2 border-red-200 overflow-hidden">
                <button
                  onClick={() => togglePromptType('debugging')}
                  className="w-full flex items-center justify-between p-6 hover:bg-red-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Bug className="w-6 h-6 text-red-600" />
                    <h4 className="font-bold text-red-900 text-lg">Para Debugging</h4>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-red-600 transition-transform duration-300 ${
                      openPromptType === 'debugging' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openPromptType === 'debugging' && (
                  <div className="px-6 pb-6 border-t border-red-200">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                      <pre className="text-xs font-mono text-gray-700 whitespace-pre-wrap">
{`PROBLEMA: [Bug específico]
CONTEXTO: [Código e ambiente]
COMPORTAMENTO ESPERADO: [O que deveria acontecer]
COMPORTAMENTO ATUAL: [O que está acontecendo]
REPRODUÇÃO: [Passos para reproduzir]`}
                      </pre>
                    </div>
                  </div>
                )}
              </div>

              {/* Arquitetura */}
              <div className="bg-white rounded-xl border-2 border-purple-200 overflow-hidden">
                <button
                  onClick={() => togglePromptType('architecture')}
                  className="w-full flex items-center justify-between p-6 hover:bg-purple-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Brain className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-purple-900 text-lg">Para Arquitetura</h4>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-purple-600 transition-transform duration-300 ${
                      openPromptType === 'architecture' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openPromptType === 'architecture' && (
                  <div className="px-6 pb-6 border-t border-purple-200">
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-4">
                      <pre className="text-xs font-mono text-gray-700 whitespace-pre-wrap">
{`PROJETO: [Descrição]
ESCALA: [Usuários/transações esperados]
TECH STACK: [Tecnologias obrigatórias]
REQUISITOS: [Performance, segurança, compliance]
CONSTRAINTS: [Orçamento, prazo, equipe]`}
                      </pre>
                    </div>
                  </div>
                )}
              </div>

              {/* Frontend/UI */}
              <div className="bg-white rounded-xl border-2 border-emerald-200 overflow-hidden">
                <button
                  onClick={() => togglePromptType('frontend')}
                  className="w-full flex items-center justify-between p-6 hover:bg-emerald-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Palette className="w-6 h-6 text-emerald-600" />
                    <h4 className="font-bold text-emerald-900 text-lg">Para Frontend/UI</h4>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-emerald-600 transition-transform duration-300 ${
                      openPromptType === 'frontend' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openPromptType === 'frontend' && (
                  <div className="px-6 pb-6 border-t border-emerald-200">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-4">
                      <pre className="text-xs font-mono text-gray-700 whitespace-pre-wrap">
{`COMPONENTE: [Tipo e propósito]
FUNCIONALIDADES: [Features específicas]
DESIGN: [Estilo visual e branding]
RESPONSIVIDADE: [Breakpoints]
ACESSIBILIDADE: [Requisitos WCAG]`}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Recomendações por Caso de Uso
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Escolha a combinação certa de ferramentas para cada situação
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {useCases.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.case}
                    className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">{item.case}</h4>
                        <p className="text-sm text-gray-600">{item.tools}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Vibe Coding Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-primary/10 to-blue-50 border-2 border-primary/30 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Por Que Vibe Coding é o Futuro?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Zap, text: "10x mais rápido que desenvolvimento tradicional" },
                  { icon: Brain, text: "Acessível para não-programadores" },
                  { icon: CheckCircle, text: "Foco no resultado ao invés de implementação" },
                  { icon: Repeat, text: "Iteração rápida através do Vibe Loop" },
                  { icon: Wrench, text: "Qualidade profissional com IA como copiloto" },
                  { icon: Rocket, text: "Evolução natural do desenvolvimento" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 pt-8 border-t border-primary/20 text-center">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Ready to vibe? O futuro do código está nas suas mãos. 🚀
                </p>
                <p className="text-sm text-gray-600 italic">
                  Desenvolvedores que dominam o Vibe Coding criarão software melhor, mais rápido e com menos bugs, mantendo sua criatividade humana como diferencial insubstituível.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Quer aplicar Vibe Coding no seu time?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Fale com a gente sobre como implementar essa metodologia revolucionária
              </p>
              <a
                href="mailto:guiperezgo@gmail.com?subject=Interesse em Vibe Coding"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-medium rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                Entre em Contato
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
