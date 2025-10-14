import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, TrendingUp, Target, Users, Shield, Award, BarChart3, Download } from "lucide-react";

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
  { nivel: 0, nome: "Manual Total", range: [0, 30], description: "Processos totalmente manuais" },
  { nivel: 1, nome: "IA Assistiva", range: [31, 45], description: "IA como ferramenta de suporte" },
  { nivel: 2, nome: "Acelerador Visual", range: [46, 60], description: "IA acelera produção visual" },
  { nivel: 3, nome: "Copiloto", range: [61, 75], description: "IA como parceiro de criação" },
  { nivel: 4, nome: "Co-criação Modular", range: [76, 90], description: "IA integrada ao processo" },
  { nivel: 5, nome: "Automação Guiada", range: [91, 100], description: "IA autônoma com supervisão" }
];

export default function MaturityTestPage() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro, 1-5 = dimensions, 6 = results
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const currentDimension = currentStep > 0 && currentStep <= 5 ? dimensions[currentStep - 1] : null;
  const totalSteps = dimensions.length;
  const progress = currentStep === 0 ? 0 : ((currentStep - 1) / totalSteps) * 100;

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const canProceed = () => {
    if (currentStep === 0) return true;
    if (!currentDimension) return false;
    return currentDimension.questions.every(q => answers[q.id] !== undefined);
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

  const handleNext = () => {
    if (currentStep === totalSteps) {
      setShowResults(true);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const results = showResults ? calculateResults() : null;

  if (currentStep === 0) {
    // Intro Screen
    return (
      <main className="flex-grow bg-white">
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  DARE Maturity Test
                </h1>

                <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                  Avaliação científica para determinar qual nível DARE sua organização está pronta para adotar
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
                  {dimensions.map((dim, idx) => {
                    const Icon = dim.icon;
                    return (
                      <motion.div
                        key={dim.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-5"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${dim.color}`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-sm">{dim.name}</h3>
                            <p className="text-xs text-gray-500">5 perguntas • {dim.weight * 100}% do peso</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">O que você vai receber:</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Nível DARE recomendado (0-5)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Análise de maturidade por dimensão</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Recomendações personalizadas</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={handleNext}
                  className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 group"
                >
                  Começar Avaliação (15 min)
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="mt-4 text-sm text-gray-500">
                  Gratuito • Sem cadastro
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (showResults && results) {
    // Results Screen
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

  // Question Screen
  if (!currentDimension) return null;

  const Icon = currentDimension.icon;

  return (
    <main className="flex-grow bg-white">
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">
                  Dimensão {currentStep} de {totalSteps}
                </span>
                <span className="text-sm text-gray-600">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-primary"
                />
              </div>
            </div>

            {/* Dimension Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${currentDimension.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentDimension.name}</h2>
                  <p className="text-sm text-gray-600">{currentDimension.weight * 100}% do peso total</p>
                </div>
              </div>
            </motion.div>

            {/* Questions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDimension.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6 mb-8"
              >
                {currentDimension.questions.map((question, idx) => (
                  <div key={question.id} className="bg-white rounded-lg border border-gray-200 p-5">
                    <h3 className="text-base font-medium text-gray-900 mb-4">
                      {idx + 1}. {question.question}
                    </h3>

                    <div className="space-y-2">
                      {question.options.map(option => (
                        <label
                          key={option.value}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-150 ${
                            answers[question.id] === option.value
                              ? `border-primary bg-primary/5`
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name={question.id}
                            value={option.value}
                            checked={answers[question.id] === option.value}
                            onChange={() => handleAnswer(question.id, option.value)}
                            className="mt-0.5 w-4 h-4 text-primary"
                          />
                          <span className="text-sm text-gray-700 flex-1">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <button
                onClick={handleBack}
                className="inline-flex items-center px-5 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </button>

              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`inline-flex items-center px-6 py-2.5 font-medium rounded-lg transition-all duration-200 ${
                  canProceed()
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {currentStep === totalSteps ? 'Ver Resultados' : 'Próxima Dimensão'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
