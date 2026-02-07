import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingUp, Target, Users, Shield, Award, Download, Bot, User } from "lucide-react";

// Estrutura das perguntas por dimensão
const dimensions = [
  {
    id: "technical",
    name: "Maturidade Técnica",
    icon: Shield,
    weight: 0.25,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    questions: [
      {
        id: "tech1",
        question: "Como você descreveria a infraestrutura tecnológica atual da sua organização?",
        options: [
          { value: 1, label: "Sistemas legados desconectados e com pouca documentação" },
          { value: 2, label: "Sistemas funcionais mas com integrações limitadas" },
          { value: 3, label: "Infraestrutura moderna com boa integração entre sistemas" },
          { value: 4, label: "Arquitetura cloud-native com APIs bem documentadas" }
        ]
      },
      {
        id: "tech2",
        question: "Qual é o estado atual dos dados na sua organização?",
        options: [
          { value: 1, label: "Dados dispersos, sem estrutura clara" },
          { value: 2, label: "Dados centralizados mas com qualidade inconsistente" },
          { value: 3, label: "Dados estruturados com governança básica" },
          { value: 4, label: "Data warehouse robusto com governança avançada" }
        ]
      },
      {
        id: "tech3",
        question: "Como são as integrações entre sistemas na sua organização?",
        options: [
          { value: 1, label: "Processos manuais e desconectados" },
          { value: 2, label: "Integrações pontuais e limitadas" },
          { value: 3, label: "APIs documentadas para principais sistemas" },
          { value: 4, label: "Plataforma de integração empresarial consolidada" }
        ]
      },
      {
        id: "tech4",
        question: "Como é tratada a segurança e privacidade de dados?",
        options: [
          { value: 1, label: "Processos informais e reativos" },
          { value: 2, label: "Políticas básicas documentadas" },
          { value: 3, label: "Compliance com regulações principais (LGPD/GDPR)" },
          { value: 4, label: "Programa maduro de segurança e privacidade" }
        ]
      },
      {
        id: "tech5",
        question: "Qual a capacidade técnica da equipe para trabalhar com IA?",
        options: [
          { value: 1, label: "Nenhuma experiência prévia" },
          { value: 2, label: "Conhecimento básico teórico" },
          { value: 3, label: "Experiência com ferramentas de IA no-code" },
          { value: 4, label: "Expertise em APIs e desenvolvimento com IA" }
        ]
      }
    ]
  },
  {
    id: "organizational",
    name: "Capacidade Organizacional",
    icon: Target,
    weight: 0.25,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    questions: [
      {
        id: "org1",
        question: "Como é o apoio da liderança para iniciativas de IA?",
        options: [
          { value: 1, label: "Resistência ou desinteresse" },
          { value: 2, label: "Interesse superficial sem investimento" },
          { value: 3, label: "Apoio ativo com orçamento alocado" },
          { value: 4, label: "Patrocínio executivo com KPIs definidos" }
        ]
      },
      {
        id: "org2",
        question: "Como você descreveria a cultura de inovação na organização?",
        options: [
          { value: 1, label: "Avessa a riscos e mudanças" },
          { value: 2, label: "Conservadora mas aberta a pilotos" },
          { value: 3, label: "Incentiva experimentação controlada" },
          { value: 4, label: "Cultura de inovação contínua e aprendizado" }
        ]
      },
      {
        id: "org3",
        question: "Qual o nível de estruturação dos processos de design?",
        options: [
          { value: 1, label: "Processos ad-hoc e informais" },
          { value: 2, label: "Processos básicos documentados" },
          { value: 3, label: "Metodologias consolidadas (Design Thinking, Agile)" },
          { value: 4, label: "Processos maduros com melhoria contínua" }
        ]
      },
      {
        id: "org4",
        question: "Como é a governança de tecnologia na organização?",
        options: [
          { value: 1, label: "Sem estrutura de governança" },
          { value: 2, label: "Governança informal e reativa" },
          { value: 3, label: "Comitês e processos de aprovação definidos" },
          { value: 4, label: "Governança estratégica com roadmap claro" }
        ]
      },
      {
        id: "org5",
        question: "Qual a adaptabilidade da organização a mudanças?",
        options: [
          { value: 1, label: "Resistência forte a mudanças" },
          { value: 2, label: "Mudanças lentas e com fricção" },
          { value: 3, label: "Boa capacidade de adaptação" },
          { value: 4, label: "Mudanças ágeis e bem gerenciadas" }
        ]
      }
    ]
  },
  {
    id: "team",
    name: "Competência da Equipe",
    icon: Users,
    weight: 0.20,
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
    questions: [
      {
        id: "team1",
        question: "Qual o conhecimento atual da equipe em IA?",
        options: [
          { value: 1, label: "Conhecimento mínimo ou inexistente" },
          { value: 2, label: "Curiosidade mas sem experiência prática" },
          { value: 3, label: "Uso básico de ferramentas de IA" },
          { value: 4, label: "Expertise em aplicação estratégica de IA" }
        ]
      },
      {
        id: "team2",
        question: "Qual a maturidade da equipe de design?",
        options: [
          { value: 1, label: "Equipe júnior ou em formação" },
          { value: 2, label: "Designers competentes mas pouca senioridade" },
          { value: 3, label: "Mix equilibrado de níveis de senioridade" },
          { value: 4, label: "Time sênior com track record sólido" }
        ]
      },
      {
        id: "team3",
        question: "Como é a adaptabilidade a novas ferramentas?",
        options: [
          { value: 1, label: "Resistência a mudanças de ferramentas" },
          { value: 2, label: "Aceitação lenta com curva de aprendizado" },
          { value: 3, label: "Rápida adoção de novas tecnologias" },
          { value: 4, label: "Early adopters que evangelizam inovações" }
        ]
      },
      {
        id: "team4",
        question: "Como é a colaboração cross-funcional?",
        options: [
          { value: 1, label: "Silos departamentais com pouca comunicação" },
          { value: 2, label: "Colaboração ocasional quando necessário" },
          { value: 3, label: "Boa integração entre times" },
          { value: 4, label: "Squads multidisciplinares consolidados" }
        ]
      },
      {
        id: "team5",
        question: "Qual a motivação da equipe para aprender IA?",
        options: [
          { value: 1, label: "Receio ou desinteresse" },
          { value: 2, label: "Curiosidade passiva" },
          { value: 3, label: "Interesse ativo em experimentar" },
          { value: 4, label: "Entusiasmo e proatividade para aprender" }
        ]
      }
    ]
  },
  {
    id: "business",
    name: "Contexto de Negócio",
    icon: TrendingUp,
    weight: 0.15,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    questions: [
      {
        id: "biz1",
        question: "Qual a clareza dos objetivos estratégicos para IA?",
        options: [
          { value: 1, label: "Sem objetivos definidos" },
          { value: 2, label: "Objetivos vagos ou genéricos" },
          { value: 3, label: "Objetivos claros mas sem métricas" },
          { value: 4, label: "OKRs específicos para adoção de IA" }
        ]
      },
      {
        id: "biz2",
        question: "Qual a disponibilidade de recursos financeiros?",
        options: [
          { value: 1, label: "Orçamento muito limitado" },
          { value: 2, label: "Recursos para ferramentas básicas" },
          { value: 3, label: "Orçamento adequado para implementação" },
          { value: 4, label: "Investimento significativo aprovado" }
        ]
      },
      {
        id: "biz3",
        question: "Qual a urgência para implementar IA?",
        options: [
          { value: 1, label: "Sem urgência, explorando possibilidades" },
          { value: 2, label: "Interesse de médio prazo" },
          { value: 3, label: "Necessidade clara nos próximos meses" },
          { value: 4, label: "Urgência competitiva imediata" }
        ]
      },
      {
        id: "biz4",
        question: "Qual a tolerância organizacional a riscos?",
        options: [
          { value: 1, label: "Extremamente conservadora" },
          { value: 2, label: "Cautelosa mas aberta a pilotos" },
          { value: 3, label: "Disposta a assumir riscos calculados" },
          { value: 4, label: "Alta tolerância com processos de mitigação" }
        ]
      },
      {
        id: "biz5",
        question: "Como é a pressão competitiva no seu mercado?",
        options: [
          { value: 1, label: "Mercado estável, pouca pressão" },
          { value: 2, label: "Competidores começando a explorar IA" },
          { value: 3, label: "Mercado em transformação ativa" },
          { value: 4, label: "Corrida acirrada por diferenciação" }
        ]
      }
    ]
  },
  {
    id: "brand",
    name: "Contexto de Marca",
    icon: Award,
    weight: 0.15,
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50",
    questions: [
      {
        id: "brand1",
        question: "Qual a importância da transparência para sua marca?",
        options: [
          { value: 1, label: "Baixa prioridade, foco em resultados" },
          { value: 2, label: "Importante mas não crítica" },
          { value: 3, label: "Valor central da marca" },
          { value: 4, label: "Diferenciador competitivo chave" }
        ]
      },
      {
        id: "brand2",
        question: "Como sua marca se posiciona em inovação?",
        options: [
          { value: 1, label: "Tradicional e conservadora" },
          { value: 2, label: "Seguidora de tendências estabelecidas" },
          { value: 3, label: "Early adopter de inovações" },
          { value: 4, label: "Pioneer e líder de pensamento" }
        ]
      },
      {
        id: "brand3",
        question: "Qual a importância da autoria criativa?",
        options: [
          { value: 1, label: "Não é uma preocupação" },
          { value: 2, label: "Importante em alguns contextos" },
          { value: 3, label: "Muito valorizada pelos clientes" },
          { value: 4, label: "Essencial para diferenciação da marca" }
        ]
      },
      {
        id: "brand4",
        question: "Como stakeholders reagem a automação?",
        options: [
          { value: 1, label: "Resistência forte ou ceticismo" },
          { value: 2, label: "Aceitação cautelosa" },
          { value: 3, label: "Expectativa positiva" },
          { value: 4, label: "Demanda ativa por inovação" }
        ]
      },
      {
        id: "brand5",
        question: "Qual o alinhamento de valores da marca com IA responsável?",
        options: [
          { value: 1, label: "Sem políticas ou discussão sobre ética" },
          { value: 2, label: "Interesse emergente mas sem estrutura" },
          { value: 3, label: "Valores de ética e transparência documentados" },
          { value: 4, label: "Programa robusto de IA responsável implementado" }
        ]
      }
    ]
  }
];

const dareNiveis = [
  { nivel: 0, nome: "Artesanal", range: [0, 25], description: "Processos totalmente manuais" },
  { nivel: 1, nome: "Backstage", range: [26, 45], description: "IA nos bastidores (pesquisa, síntese)" },
  { nivel: 2, nome: "Geração de Assets", range: [46, 60], description: "IA gera imagens, ícones, conteúdos" },
  { nivel: 3, nome: "Prompt-to-Prototype", range: [61, 80], description: "IA propõe e monta, você direciona" },
  { nivel: 4, nome: "Orquestração de Agentes", range: [81, 100], description: "Agentes autônomos com contexto via MCP" }
];

// Flatten all questions into a single array
const allQuestions = dimensions.flatMap(dim =>
  dim.questions.map(q => ({
    ...q,
    dimensionId: dim.id,
    dimensionName: dim.name,
    dimensionIcon: dim.icon
  }))
);

// Transition messages between dimensions
const transitionMessages: Record<string, string> = {
  technical: "Ótimo! Agora vamos falar sobre a Capacidade Organizacional da sua empresa.",
  organizational: "Perfeito! Vamos entender melhor a Competência da sua Equipe.",
  team: "Excelente! Agora sobre o Contexto de Negócio.",
  business: "Muito bem! Por fim, vamos explorar o Contexto de Marca.",
};

type Message = {
  id: string;
  type: 'ai' | 'user' | 'intro' | 'transition';
  content: string;
  options?: Array<{ value: number; label: string }>;
  questionId?: string;
};

export default function MaturityTestPage() {
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isTyping, setIsTyping] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addAIMessage = (content: string, options?: Array<{ value: number; label: string }>, questionId?: string, type: 'ai' | 'transition' = 'ai') => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: `msg-${Date.now()}`,
        type,
        content,
        options,
        questionId
      }]);
      setIsTyping(false);
    }, 800); // Simulate typing delay
  };

  const handleStart = () => {
    setStarted(true);
    const introMessage = "Olá! 👋 Sou o assistente virtual do DARE Framework. Vou fazer algumas perguntas para entender o nível de maturidade da sua organização em relação à adoção de IA. São 25 perguntas rápidas, levará cerca de 15 minutos. Vamos começar?";

    setMessages([{
      id: 'intro',
      type: 'intro',
      content: introMessage,
      options: undefined
    }]);

    // Start with first question after intro
    setTimeout(() => {
      const firstQuestion = allQuestions[0];
      addAIMessage(firstQuestion.question, firstQuestion.options, firstQuestion.id);
    }, 1200);
  };

  const handleAnswer = (questionId: string, value: number, label: string) => {
    // Add user's answer to chat
    setMessages(prev => [...prev, {
      id: `user-${Date.now()}`,
      type: 'user',
      content: label,
      questionId
    }]);

    // Store answer
    setAnswers(prev => ({ ...prev, [questionId]: value }));

    const nextIndex = currentQuestionIndex + 1;

    // Check if we completed a dimension and need a transition
    if (nextIndex < allQuestions.length) {
      const currentDimension = allQuestions[currentQuestionIndex].dimensionId;
      const nextDimension = allQuestions[nextIndex].dimensionId;

      if (currentDimension !== nextDimension) {
        // Add transition message
        setTimeout(() => {
          addAIMessage(transitionMessages[currentDimension], undefined, undefined, 'transition');

          // Then add next question
          setTimeout(() => {
            const nextQuestion = allQuestions[nextIndex];
            addAIMessage(nextQuestion.question, nextQuestion.options, nextQuestion.id);
            setCurrentQuestionIndex(nextIndex);
          }, 1200);
        }, 600);
      } else {
        // Same dimension, just ask next question
        setTimeout(() => {
          const nextQuestion = allQuestions[nextIndex];
          addAIMessage(nextQuestion.question, nextQuestion.options, nextQuestion.id);
          setCurrentQuestionIndex(nextIndex);
        }, 600);
      }
    } else {
      // All questions answered, show final message and results
      setTimeout(() => {
        addAIMessage("Perfeito! Terminamos todas as perguntas. Estou analisando suas respostas para gerar seu relatório de maturidade...");

        setTimeout(() => {
          setShowResults(true);
        }, 2000);
      }, 600);
    }
  };

  const calculateResults = () => {
    let finalScore = 0;

    dimensions.forEach(dimension => {
      const dimensionScore = dimension.questions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
      const normalizedScore = (dimensionScore / 20) * 100;
      finalScore += normalizedScore * dimension.weight;
    });

    const recommendedLevel = dareNiveis.find(
      nivel => finalScore >= nivel.range[0] && finalScore <= nivel.range[1]
    ) || dareNiveis[0];

    return { finalScore: Math.round(finalScore), recommendedLevel };
  };

  const results = showResults ? calculateResults() : null;

  // Intro Screen
  if (!started) {
    return (
      <main className="flex-grow bg-gradient-to-br from-gray-50 to-gray-100">
        <section className="py-12 sm:py-16 min-h-[80vh] flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-purple-600 text-white mb-6">
                  <Bot className="w-10 h-10" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  DARE Maturity Test
                </h1>

                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Avaliação conversacional para determinar qual nível DARE sua organização está pronta para adotar
                </p>

                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8 text-left max-w-2xl mx-auto">
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">Como funciona:</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Conversa natural com assistente virtual</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>25 perguntas sobre 5 dimensões de maturidade</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Relatório completo com nível DARE recomendado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Gratuito • Sem cadastro • ~15 minutos</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={handleStart}
                  className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium text-lg rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Iniciar Conversa
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Results Screen
  if (showResults && results) {
    return (
      <main className="flex-grow bg-white">
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-5">
                    {results.recommendedLevel.nivel}
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                    Nível {results.recommendedLevel.nivel}: {results.recommendedLevel.nome}
                  </h1>

                  <p className="text-lg text-gray-600 mb-2">
                    {results.recommendedLevel.description}
                  </p>

                  <p className="text-sm text-gray-500">
                    Pontuação: {results.finalScore}/100
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-5">Maturidade por Dimensão</h2>

                  <div className="space-y-5">
                    {dimensions.map(dimension => {
                      const dimensionScore = dimension.questions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
                      const normalizedScore = (dimensionScore / 20) * 100;
                      const Icon = dimension.icon;

                      return (
                        <div key={dimension.id}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-gray-600" />
                              <span className="text-sm font-medium text-gray-900">{dimension.name}</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-700">{Math.round(normalizedScore)}%</span>
                          </div>
                          <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${normalizedScore}%` }}
                              transition={{ duration: 0.8, delay: 0.1 }}
                              className={`h-full bg-gradient-to-r ${dimension.color}`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Recomendações</h2>

                  <div className="space-y-4 text-gray-700 text-sm">
                    <p className="leading-relaxed">
                      Com base na sua avaliação, recomendamos começar pelo <strong>Nível {results.recommendedLevel.nivel} - {results.recommendedLevel.nome}</strong>. Este nível equilibra suas capacidades atuais com o potencial de evolução.
                    </p>

                    <div className="bg-white rounded-lg p-5 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Próximos Passos:
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-medium">1.</span>
                          <span>Compartilhe este resultado com sua liderança</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-medium">2.</span>
                          <span>Estude o framework DARE completo para entender seu nível</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-medium">3.</span>
                          <span>Considere licenciamento ou consultoria para implementação guiada</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Baixar Relatório
                  </button>

                  <a
                    href="https://calendar.app.google/7zs5wDSwXJRvgv2V6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-200"
                  >
                    Falar com Especialista
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>

                  <a
                    href="/"
                    className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200"
                  >
                    Conhecer o Framework
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Chat Interface
  const progress = ((currentQuestionIndex + 1) / allQuestions.length) * 100;

  return (
    <main className="flex-grow bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Progresso: {currentQuestionIndex + 1} de {allQuestions.length}
                </span>
                <span className="text-sm font-semibold text-primary">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-primary to-purple-600"
                />
              </div>
            </div>

            {/* Chat Container */}
            <div
              ref={chatContainerRef}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 min-h-[600px] max-h-[700px] overflow-y-auto"
            >
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-3 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {/* Avatar */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === 'user'
                          ? 'bg-gray-700'
                          : 'bg-gradient-to-br from-primary to-purple-600'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>

                      {/* Message Content */}
                      <div className={`flex flex-col gap-2 ${message.type === 'user' ? 'items-end' : 'items-start'}`}>
                        <div className={`rounded-2xl px-4 py-3 ${
                          message.type === 'user'
                            ? 'bg-gray-700 text-white'
                            : message.type === 'transition'
                            ? 'bg-gradient-to-r from-purple-50 to-pink-50 text-gray-800 border border-purple-200'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          <p className="text-sm leading-relaxed whitespace-pre-line">
                            {message.content}
                          </p>
                        </div>

                        {/* Options */}
                        {message.options && index === messages.length - 1 && (
                          <div className="flex flex-col gap-2 w-full mt-2">
                            {message.options.map((option) => (
                              <motion.button
                                key={option.value}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: option.value * 0.1 }}
                                onClick={() => handleAnswer(message.questionId!, option.value, option.label)}
                                className="text-left px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-200 text-sm text-gray-700 hover:text-gray-900"
                              >
                                {option.label}
                              </motion.button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="flex gap-3 max-w-[85%]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl px-4 py-3">
                        <div className="flex gap-1">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
