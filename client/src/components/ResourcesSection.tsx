import React, { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ResourceModal from "./ResourceModal";

export default function ResourcesSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [modalData, setModalData] = useState({
    isOpen: false,
    level: 0,
    title: "",
    content: ""
  });

  // Refs for scroll containers
  const scrollRefAll = useRef<HTMLDivElement>(null);
  const scrollRefBasic = useRef<HTMLDivElement>(null);
  const scrollRefIntermediate = useRef<HTMLDivElement>(null);
  const scrollRefAdvanced = useRef<HTMLDivElement>(null);

  // Scroll functions
  const scroll = (direction: 'left' | 'right') => {
    let scrollRef;
    switch (activeTab) {
      case 'all':
        scrollRef = scrollRefAll;
        break;
      case 'basic':
        scrollRef = scrollRefBasic;
        break;
      case 'intermediate':
        scrollRef = scrollRefIntermediate;
        break;
      case 'advanced':
        scrollRef = scrollRefAdvanced;
        break;
      default:
        scrollRef = scrollRefAll;
    }

    if (scrollRef.current) {
      const scrollAmount = 350;
      const newPosition = direction === 'left'
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  // Função para abrir o modal com os dados do nível selecionado
  const openModal = (level: number) => {
    let title = "";
    let content = "";

    switch (level) {
      case 0:
        title = "Nível 0 - Artesanal";
        content = `
          <p><strong>No Nível 0, o designer trabalha completamente sem assistência de IA.</strong></p>
          
          <p>Todo o processo criativo é realizado manualmente, desde a concepção inicial até a finalização, utilizando apenas ferramentas tradicionais de design como Figma, Sketch ou Adobe XD para wireframes e protótipos.</p>

          <h4>Apropriado para:</h4>
          <ul>
            <li>Projetos que exigem uma abordagem puramente humana</li>
            <li>Trabalhos onde o cliente requer total controle e autoria</li>
            <li>Situações onde questões de propriedade intelectual são rigorosas</li>
          </ul>

          <h4>Prós:</h4>
          <ul>
            <li>Total controle criativo e autoria clara</li>
            <li>Originalidade garantida nas soluções</li>
            <li>Sem preocupações com propriedade intelectual ligadas à IA</li>
          </ul>

          <h4>Contras:</h4>
          <ul>
            <li>Processo significativamente mais lento</li>
            <li>Maior custo para o cliente devido ao tempo envolvido</li>
            <li>Limitação às habilidades técnicas do designer individual</li>
          </ul>

          <p><strong>Nível de risco:</strong> Nenhum risco associado ao uso de IA, mas maior tempo de desenvolvimento.</p>
        `;
        break;
      case 1:
        title = "Nível 1 - Backstage";
        content = `
          <p><strong>No Nível 1, a IA te ajuda, mas não cria.</strong></p>

          <p>Uso pontual da IA para tarefas operacionais: resumir pesquisas, organizar dados, revisar textos, gerar insights. Todo o trabalho visual e criativo continua sendo 100% realizado pelo designer.</p>

          <h4>Ferramentas principais:</h4>
          <ul>
            <li>ChatGPT (GPT-5.2) - organização de pesquisas e resumos</li>
            <li>Claude Opus 4.6 - research e insights avançados</li>
            <li>Notion AI - documentação e síntese</li>
            <li>Figma AI - auto-complete inteligente</li>
            <li>Miro AI - construção de mapas mentais</li>
          </ul>

          <h4>Apropriado para:</h4>
          <ul>
            <li>Research e análise de dados</li>
            <li>Documentação e síntese</li>
            <li>Organização de insights</li>
          </ul>

          <h4>Prós:</h4>
          <ul>
            <li>25-40% redução no tempo de research</li>
            <li>Mantém integridade criativa</li>
            <li>Baixo risco de derivação</li>
          </ul>

          <h4>Contras:</h4>
          <ul>
            <li>Nenhuma aceleração no design em si</li>
            <li>Benefícios limitados em processos puramente visuais</li>
          </ul>

          <p><strong>Riscos:</strong> Confiança excessiva em insights gerados por IA sem verificação; viés de dados influenciando decisões de design.</p>
        `;
        break;
      case 2:
        title = "Nível 2 - Geração de Assets";
        content = `
          <p><strong>No Nível 2, você cria, a IA preenche.</strong></p>

          <p>A IA entra para gerar partes do design (imagens, textos, ícones, padrões). Designer controla a composição.</p>

          <h4>Ferramentas principais:</h4>
          <ul>
            <li>Midjourney 7 - geração de imagens com melhor consistência</li>
            <li>GPT Image 1 - criação de assets visuais personalizados</li>
            <li>Adobe Firefly - integrado ao Creative Suite</li>
            <li>Figma Draw - ilustração vetorial assistida</li>
            <li>Ideogram 3.0 - texto em imagens</li>
          </ul>

          <h4>Apropriado para:</h4>
          <ul>
            <li>Criação de assets visuais</li>
            <li>Ilustrações e ícones</li>
            <li>Mockups e imagens conceituais</li>
          </ul>

          <h4>Prós:</h4>
          <ul>
            <li>50-70% aceleração na criação de assets</li>
            <li>Expande possibilidades visuais</li>
            <li>Reduz dependência de bibliotecas de assets</li>
          </ul>

          <h4>Contras:</h4>
          <ul>
            <li>Risco de quebra de consistência</li>
            <li>Visual potencialmente genérico</li>
            <li>Dependência de prompts bem escritos</li>
          </ul>

          <p><strong>Riscos:</strong> Questões de direitos autorais com imagens geradas; falta de consistência entre elementos visuais; estéticas derivativas.</p>
        `;
        break;
      case 3:
        title = "Nível 3 - Prompt-to-Prototype";
        content = `
          <p><strong>No Nível 3, IA propõe e monta, você direciona.</strong></p>

          <p>A IA sugere layouts, fluxos e telas; co-edição em tempo real; prompt-to-prototype. O designer edita, mistura e atua como diretor de arte.</p>

          <h4>Ferramentas principais:</h4>
          <ul>
            <li>Figma AI, Stitch, Uizard - sugestões e protótipos</li>
            <li>Cursor, Claude Artifacts - co-criação iterativa</li>
            <li>v0 by Vercel, Bolt.new, Figma Make - prompt-to-prototype</li>
          </ul>

          <h4>Apropriado para:</h4>
          <ul>
            <li>Prototipagem rápida e exploração de variações</li>
            <li>Prompt-to-prototype e MVPs rápidos</li>
            <li>Co-criação em tempo real</li>
          </ul>

          <h4>Prós:</h4>
          <ul>
            <li>60-90% aceleração concept-to-prototype</li>
            <li>Múltiplas variações instantâneas</li>
            <li>Co-criação iterativa em tempo real</li>
          </ul>

          <h4>Contras:</h4>
          <ul>
            <li>Requer curadoria crítica</li>
            <li>Risco de vício criativo</li>
            <li>Exige ajustes para virar produto real</li>
          </ul>

          <p><strong>Riscos:</strong> Atrofia de habilidades criativas; homogeneização visual; necessidade de checkpoints de revisão humana.</p>
        `;
        break;
      case 4:
        title = "Nível 4 - Orquestração de Agentes";
        content = `
          <p><strong>No Nível 4, a IA atua como agentes autônomos com contexto.</strong></p>

          <p>Agentes de IA que executam tarefas complexas de forma independente. Acesso contextual via MCP, orquestração de workflows e co-criação agentic.</p>

          <h4>Ferramentas principais:</h4>
          <ul>
            <li>Claude com MCP - agentes com contexto do projeto</li>
            <li>Cursor Agent Mode - desenvolvimento agentic</li>
            <li>Agentic Workflows, MCP Servers customizados</li>
            <li>Multi-Agent Systems</li>
          </ul>

          <h4>Apropriado para:</h4>
          <ul>
            <li>Agentes copiloto com MCP</li>
            <li>Agentes co-criadores com contexto completo</li>
            <li>Orquestração de workflows agentic</li>
          </ul>

          <h4>Prós:</h4>
          <ul>
            <li>Contexto unificado via MCP</li>
            <li>Execução autônoma com governança</li>
            <li>Integração com ferramentas e dados</li>
          </ul>

          <h4>Contras:</h4>
          <ul>
            <li>Curva de aprendizado em MCP</li>
            <li>Requer governança e gates</li>
            <li>Risco de sobre-dependência</li>
          </ul>

          <p><strong>Riscos:</strong> Perda de controle em execuções autônomas; necessidade de gates e revisão humana; governança de agentes essencial.</p>
        `;
        break;
      default:
        break;
    }

    setModalData({
      isOpen: true,
      level,
      title,
      content
    });
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
  };

  // Função para renderizar cards de cada nível
  const renderLevelCard = (level: number, title: string, tools: string[], compact = false) => {
    return (
      <Card key={level} className="overflow-hidden snap-center shrink-0 w-[260px] sm:w-[280px] md:w-[300px] border-0 hover:shadow-xl transition-all duration-300 rounded-xl bg-white shadow-md relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50 z-0"></div>
        <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-lg transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></div>
        
        <CardContent className={`p-0 ${compact ? 'h-full' : ''} relative z-10`}>
          <div className="p-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">{title}</h3>
              <span className="bg-white text-blue-600 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                Nível {level}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">Ferramentas Principais</h4>
              <ul className="space-y-3 mb-5 text-sm text-gray-700">
                {tools.map((tool, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                    </span>
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full text-sm font-medium bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 hover:bg-blue-100 hover:text-blue-700 transition-colors rounded-lg shadow-sm"
              onClick={() => openModal(level)}
            >
              Ver detalhes completos
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="recursos" className="py-24 bg-gradient-to-b from-blue-50/10 to-blue-100/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      
      {/* Modal para detalhes de cada nível */}
      <ResourceModal 
        isOpen={modalData.isOpen}
        onClose={closeModal}
        level={modalData.level}
        title={modalData.title}
        content={modalData.content}
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-block p-2 px-4 rounded-full bg-blue-100/50 text-blue-700 font-medium text-sm mb-4">
            Nível 0 até Nível 4
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Ferramentas Recomendadas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            Explore as ferramentas de IA adequadas para cada nível do framework
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-sm mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-4 py-2 rounded-full inline-flex items-center shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M15 18l-6-6 6-6"/><path d="M9 18l-6-6 6-6"/></svg>
              <span className="font-medium">Deslize para navegar</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="m9 18 6-6-6-6"/><path d="m15 18 6-6-6-6"/></svg>
            </span>
          </div>
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="overflow-x-auto pb-2 max-w-full">
              <div className="bg-white/60 p-2 rounded-xl shadow-sm backdrop-blur-sm max-w-2xl mx-auto">
                <TabsList className="flex justify-start md:justify-center mb-0 space-x-1 bg-blue-50/80 rounded-lg p-1 min-w-max mx-auto">
                  <TabsTrigger value="all" className="rounded-md px-4 sm:px-5 py-2.5 text-sm font-medium whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200">
                    Todos os Níveis
                  </TabsTrigger>
                  <TabsTrigger value="basic" className="rounded-md px-4 sm:px-5 py-2.5 text-sm font-medium whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200">
                    Básico
                  </TabsTrigger>
                  <TabsTrigger value="intermediate" className="rounded-md px-4 sm:px-5 py-2.5 text-sm font-medium whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200">
                    Intermediário
                  </TabsTrigger>
                  <TabsTrigger value="advanced" className="rounded-md px-4 sm:px-5 py-2.5 text-sm font-medium whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200">
                    Avançado
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            <TabsContent value="all" className="mt-4">
              <div className="relative snap-x-container">
                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center border border-gray-200"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center border border-gray-200"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </motion.button>

                <div ref={scrollRefAll} className="flex overflow-x-auto scrollbar-hide pb-10 pt-4 space-x-4 md:space-x-6 snap-x px-2 md:px-4 rounded-lg mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {renderLevelCard(0, "Artesanal", [
                    "Caneta e papel para esboços iniciais",
                    "Figma ou Adobe XD para wireframes simples e protótipos básicos",
                    "Processos analógicos de design, sem automação de IA"
                  ], true)}
                  
                  {renderLevelCard(1, "Backstage", [
                    "ChatGPT (GPT-5.2) para organização de pesquisas e resumos",
                    "Claude Opus 4.6 para research e insights avançados",
                    "Notion AI para documentação e síntese",
                    "Figma AI para auto-complete inteligente",
                    "Miro AI para construção de mapas mentais"
                  ], true)}
                  
                  {renderLevelCard(2, "Geração de Assets", [
                    "Midjourney 7 para geração de imagens com melhor consistência",
                    "GPT Image 1 para criação de assets visuais personalizados",
                    "Adobe Firefly integrado ao Creative Suite",
                    "Figma Draw para ilustração vetorial assistida",
                    "Ideogram 3.0 para texto em imagens"
                  ], true)}
                  
                  {renderLevelCard(3, "Prompt-to-Prototype", [
                    "Figma AI, Stitch, Uizard - sugestões e protótipos",
                    "Cursor, Claude Artifacts - co-criação iterativa",
                    "v0, Bolt.new, Figma Make - prompt-to-prototype"
                  ], true)}

                  {renderLevelCard(4, "Orquestração de Agentes", [
                    "Claude com MCP - agentes com contexto",
                    "Cursor Agent Mode - desenvolvimento agentic",
                    "Agentic Workflows, MCP Servers customizados"
                  ], true)}
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-2">
                  <span className="h-1.5 w-24 bg-blue-200 rounded-full"></span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="basic" className="mt-4">
              <div className="relative snap-x-container">
                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center border border-gray-200"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center border border-gray-200"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </motion.button>

                <div ref={scrollRefBasic} className="flex overflow-x-auto scrollbar-hide pb-10 pt-4 space-x-4 md:space-x-6 snap-x px-2 md:px-4 rounded-lg mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {renderLevelCard(0, "Artesanal", [
                    "Caneta e papel para esboços iniciais",
                    "Figma ou Adobe XD para wireframes simples e protótipos básicos",
                    "Processos analógicos de design, sem automação de IA"
                  ])}

                  {renderLevelCard(1, "Backstage", [
                    "ChatGPT (GPT-5.2) para organização de pesquisas e resumos",
                    "Claude Opus 4.6 para research e insights avançados",
                    "Notion AI para documentação e síntese",
                    "Figma AI para auto-complete inteligente",
                    "Miro AI para construção de mapas mentais"
                  ])}

                  {renderLevelCard(2, "Geração de Assets", [
                    "Midjourney 7 para geração de imagens com melhor consistência",
                    "GPT Image 1 para criação de assets visuais personalizados",
                    "Adobe Firefly integrado ao Creative Suite",
                    "Figma Draw para ilustração vetorial assistida",
                    "Ideogram 3.0 para texto em imagens"
                  ])}
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-2">
                  <span className="h-1.5 w-16 bg-blue-200 rounded-full"></span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="mt-4">
              <div className="relative snap-x-container">
                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center border border-gray-200"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center border border-gray-200"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </motion.button>

                <div ref={scrollRefIntermediate} className="flex overflow-x-auto scrollbar-hide pb-10 pt-4 space-x-4 md:space-x-6 snap-x px-2 md:px-4 rounded-lg mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {renderLevelCard(3, "Prompt-to-Prototype", [
                    "Figma AI, Stitch, Uizard - sugestões e protótipos",
                    "Cursor, Claude Artifacts - co-criação iterativa",
                    "v0, Bolt.new, Figma Make - prompt-to-prototype"
                  ])}
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-2">
                  <span className="h-1.5 w-16 bg-blue-200 rounded-full"></span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="mt-4">
              <div className="relative snap-x-container">
                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center border border-gray-200"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center border border-gray-200"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </motion.button>

                <div ref={scrollRefAdvanced} className="flex overflow-x-auto scrollbar-hide pb-10 pt-4 space-x-4 md:space-x-6 snap-x px-2 md:px-4 rounded-lg mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {renderLevelCard(4, "Orquestração de Agentes", [
                    "Claude com MCP - agentes com contexto",
                    "Cursor Agent Mode - desenvolvimento agentic",
                    "Agentic Workflows, MCP Servers customizados"
                  ])}
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-2">
                  <span className="h-1.5 w-16 bg-blue-200 rounded-full"></span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}