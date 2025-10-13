import { motion } from "framer-motion";
import { Bot, Network, Zap, Shield, Layers, GitBranch, ArrowRight, Cpu, Database, Workflow } from "lucide-react";

const agentFeatures = [
  {
    icon: Bot,
    title: "Agentes Autônomos",
    description: "Agentes de IA que executam tarefas complexas de forma independente, com capacidade de planejamento e execução multi-step.",
    examples: [
      "Agentes de pesquisa que exploram e sintetizam informação",
      "Assistentes de código que refatoram e otimizam",
      "Designers automatizados que iteram soluções"
    ],
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50"
  },
  {
    icon: Network,
    title: "Model Context Protocol (MCP)",
    description: "Protocolo aberto que permite que modelos de IA acessem contexto de múltiplas fontes de forma padronizada e segura.",
    examples: [
      "Acesso a bancos de dados e APIs de forma contextual",
      "Integração com ferramentas de produtividade",
      "Compartilhamento seguro de contexto entre sistemas"
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: Workflow,
    title: "Orquestração de Agentes",
    description: "Múltiplos agentes especializados trabalhando juntos em workflows coordenados para resolver problemas complexos.",
    examples: [
      "Agente de pesquisa + Agente de design + Agente de código",
      "Pipelines automatizados de criação de conteúdo",
      "Revisão e validação multi-camadas"
    ],
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50"
  }
];

const mcpBenefits = [
  {
    icon: Layers,
    title: "Contexto Unificado",
    description: "Acesso consistente a dados de design, código, documentação e ferramentas através de uma interface padronizada.",
    metric: "100%",
    label: "Compatibilidade"
  },
  {
    icon: Shield,
    title: "Segurança e Controle",
    description: "Permissões granulares e auditoria de acesso garantem que agentes só acessem o necessário.",
    metric: "Enterprise",
    label: "Grade Security"
  },
  {
    icon: GitBranch,
    title: "Extensibilidade",
    description: "Crie seus próprios servidores MCP para expor qualquer fonte de dados ou ferramenta aos agentes.",
    metric: "Open Source",
    label: "Protocol"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Streaming de dados e cache inteligente para respostas rápidas mesmo com contextos massivos.",
    metric: "Real-time",
    label: "Response"
  }
];

const useCases = [
  {
    level: "Nível 3-4",
    icon: Cpu,
    title: "Agentes Copiloto",
    description: "Agentes que sugerem, validam e auxiliam em decisões de design e desenvolvimento.",
    tools: ["Claude com MCP", "GitHub Copilot", "Cursor AI Agent Mode"]
  },
  {
    level: "Nível 4-5",
    icon: Database,
    title: "Agentes Co-criadores",
    description: "Agentes que co-criam ativamente, acessando contexto completo do projeto via MCP.",
    tools: ["Agentic Workflows", "Multi-Agent Systems", "MCP Servers customizados"]
  }
];

export default function AgentsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="agents" className="py-16 sm:py-24 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1 mb-3 border border-purple-500/30 rounded-full bg-purple-500/10 text-purple-700 text-sm font-semibold">
              <Bot className="w-4 h-4 mr-2" />
              Próxima Geração
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
              Agentes de IA e Model Context Protocol
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              O futuro da colaboração humano-IA: agentes autônomos com acesso contextual inteligente
            </p>
          </motion.div>

          {/* Agent Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {agentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute -top-6 left-6 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} shadow-lg flex items-center justify-center`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-20 group-hover:opacity-40 transition duration-300 blur-sm`}></div>
                <div className={`relative bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm border border-gray-200 p-6 pt-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br ${feature.gradient} mt-1.5 mr-2 flex-shrink-0`}></span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* MCP Benefits */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                <Network className="w-6 h-6 text-blue-600" />
                Benefícios do Model Context Protocol
              </h3>
              <p className="text-gray-600">
                Protocolo aberto da Anthropic para integração contextual de IA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mcpBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{benefit.metric}</div>
                      <div className="text-xs text-gray-500">{benefit.label}</div>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases in DARE Framework */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Agentes no DARE Framework
              </h3>
              <p className="text-gray-600">
                Como integrar agentes de IA nos diferentes níveis do framework
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg shadow-md">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-semibold text-purple-700 mb-1">
                        {useCase.level}
                      </span>
                      <h4 className="text-xl font-semibold text-gray-900">{useCase.title}</h4>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tools.map((tool, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/70 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 border border-purple-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto para Explorar Agentes de IA?
              </h3>
              <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
                Descubra como agentes autônomos e MCP podem revolucionar seu workflow de design
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#framework"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  Ver Framework Completo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://modelcontextprotocol.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-purple-700 text-white font-medium rounded-lg shadow-lg hover:bg-purple-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Network className="mr-2 w-5 h-5" />
                  Saiba Mais sobre MCP
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
