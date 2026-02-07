import { motion } from "framer-motion";
import {
  Bot,
  Network,
  Zap,
  Shield,
  Layers,
  GitBranch,
  ArrowRight,
  Cpu,
  Database,
  Workflow,
  CheckCircle,
  Sparkles,
  BookOpen,
  Terminal,
  ExternalLink,
} from "lucide-react";

const agentFeatures = [
  {
    icon: Bot,
    title: "Agentes Autônomos",
    description: "Agentes de IA que executam tarefas complexas de forma independente.",
    examples: [
      "Agentes de pesquisa que exploram e sintetizam informação",
      "Assistentes de código que refatoram e otimizam",
      "Designers automatizados que iteram soluções",
    ],
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
  },
  {
    icon: Network,
    title: "Model Context Protocol (MCP)",
    description: "Protocolo aberto que permite que modelos de IA acessem contexto de múltiplas fontes.",
    examples: [
      "Acesso a bancos de dados e APIs de forma contextual",
      "Integração com ferramentas de produtividade",
      "Compartilhamento seguro de contexto entre sistemas",
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    icon: Workflow,
    title: "Orquestração de Agentes",
    description: "Múltiplos agentes especializados trabalhando em workflows coordenados.",
    examples: [
      "Agente de pesquisa + Agente de design + Agente de código",
      "Pipelines automatizados de criação de conteúdo",
      "Revisão e validação multi-camadas",
    ],
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
];

const mcpBenefits = [
  { icon: Layers, title: "Contexto Unificado", description: "Acesso consistente a dados via interface padronizada.", metric: "100%", label: "Compatibilidade" },
  { icon: Shield, title: "Segurança e Controle", description: "Permissões granulares e auditoria de acesso.", metric: "Enterprise", label: "Security" },
  { icon: GitBranch, title: "Extensibilidade", description: "Crie servidores MCP para expor fontes de dados.", metric: "Open Source", label: "Protocol" },
  { icon: Zap, title: "Performance", description: "Streaming e cache para contextos massivos.", metric: "Real-time", label: "Response" },
];

const dareLevelsMapping = [
  { level: "Nível 3", icon: Cpu, title: "Prompt-to-Prototype", description: "IA propõe e monta, você direciona. Base para evoluir a agentes.", tools: ["Figma AI", "Cursor", "Claude Artifacts", "v0"] },
  { level: "Nível 4", icon: Database, title: "Orquestração de Agentes", description: "Agentes autônomos com contexto via MCP e orquestração.", tools: ["Claude com MCP", "Cursor Agent Mode", "Agentic Workflows", "MCP Servers customizados"] },
];

const practicalGuides = [
  {
    title: "Configurar MCP no Cursor",
    steps: [
      "Instale a extensão MCP no Cursor",
      "Configure o arquivo de configuração com os servidores desejados",
      "Conecte o registry de prompts do DARE (prompts/registry.yaml)",
    ],
    link: "https://docs.cursor.com/context/model-context-protocol",
  },
  {
    title: "Usar Claude com MCP",
    steps: [
      "Acesse Claude.ai ou API com suporte a MCP",
      "Configure ferramentas MCP no projeto",
      "Use o contexto do DARE para decisões de design",
    ],
    link: "https://modelcontextprotocol.io",
  },
  {
    title: "Integrar Prompt Registry do DARE",
    steps: [
      "Leia prompts/registry/project.yaml para prompts de desenvolvimento",
      "Explore prompts/exploration/ para experimentos",
      "Siga prompts/context/conventions.md para convenções",
    ],
    link: "/aplicar/packs",
  },
];

export default function AgentsMcpPage() {
  return (
    <main className="flex-grow bg-gradient-to-b from-white via-purple-50/30 to-white">
      {/* Hero */}
      <section id="introducao" className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center justify-center px-4 py-1 mb-4 border border-purple-500/30 rounded-full bg-purple-500/10 text-purple-700 text-sm font-semibold">
                <Bot className="w-4 h-4 mr-2" />
                DARE OS — Próxima Geração
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                Agentes de IA e Model Context Protocol
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                O futuro da colaboração humano-IA: agentes autônomos com acesso contextual inteligente. Integre ao DARE com contextos funcionais e guias práticos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conceitos */}
      <section id="conceitos" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Conceitos fundamentais</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Agentes, MCP e orquestração no DARE</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {agentFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  className={`relative bg-gradient-to-br ${f.bgGradient} border border-gray-200 p-6 rounded-xl`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4`}>
                    <f.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{f.description}</p>
                  <ul className="space-y-1">
                    {f.examples.map((ex, j) => (
                      <li key={j} className="flex items-start text-sm text-gray-600">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${f.gradient} mt-1.5 mr-2 flex-shrink-0`} />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Moltbot e Moltbook */}
      <section id="moltbot-moltbook" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Moltbot e Moltbook</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ecossistema emergente de agentes: da criação ao convívio social
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg">
                    <Terminal className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">OpenClaw / Moltbot</h3>
                    <p className="text-sm text-amber-700">Gateway e CLI para agentes</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Gateway self-hosted que conecta WhatsApp, Telegram, Discord e iMessage a agentes de IA. Rode em sua máquina, controle seus dados. Multi-channel, multi-agent, open source (MIT).
                </p>
                <a href="https://docs.molt.bot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-amber-700 hover:underline">
                  Documentação
                  <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 rounded-xl p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Moltbook</h3>
                    <p className="text-sm text-rose-700">Rede social para agentes de IA</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Plataforma tipo Reddit onde agentes postam, comentam, votam e formam comunidades. Humanos observam. Identidade verificada para agentes, API para apps e desenvolvedores.
                </p>
                <a href="https://www.moltbook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-rose-700 hover:underline">
                  moltbook.com
                  <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios MCP */}
      <section id="mcp" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                <Network className="w-8 h-8 text-blue-600" />
                Benefícios do Model Context Protocol
              </h2>
              <p className="text-gray-600">Protocolo aberto da Anthropic para integração contextual</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mcpBenefits.map((b, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex justify-between mb-3">
                    <b.icon className="w-8 h-8 text-blue-600" />
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{b.metric}</div>
                      <div className="text-xs text-gray-500">{b.label}</div>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{b.title}</h4>
                  <p className="text-sm text-gray-600">{b.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contextos funcionais — Mapeamento DARE */}
      <section id="contextos-dare" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Agentes no DARE Framework</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Quando e como usar agentes em cada nível de maturidade</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dareLevelsMapping.map((uc, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8"
                  initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                      <uc.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-semibold text-purple-700 mb-1">{uc.level}</span>
                      <h4 className="text-xl font-semibold text-gray-900">{uc.title}</h4>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{uc.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {uc.tools.map((t, j) => (
                      <span key={j} className="px-3 py-1 bg-white/70 rounded-full text-xs font-medium text-gray-700 border border-purple-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div className="mt-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <a href="/#framework" className="inline-flex items-center text-primary font-medium hover:underline">
                Ver níveis completos do Framework
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guias práticos */}
      <section id="guias-praticos" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center justify-center px-4 py-1 mb-3 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <BookOpen className="w-4 h-4 mr-2" />
                Guias Práticos
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Como começar</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Passo a passo para integrar Agentes e MCP ao seu workflow</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {practicalGuides.map((g, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold text-gray-900">{g.title}</h3>
                  </div>
                  <ol className="space-y-2 mb-4">
                    {g.steps.map((s, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">{j + 1}</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                  <a href={g.link.startsWith("http") ? g.link : g.link} target={g.link.startsWith("http") ? "_blank" : undefined} rel={g.link.startsWith("http") ? "noopener noreferrer" : undefined} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    {g.link.startsWith("http") ? "Documentação externa" : "Ver Packs DARE"}
                    <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Pronto para explorar Agentes de IA?</h3>
              <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
                Integre o prompt registry do DARE e configure MCP para Cursor ou Claude
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/#framework" className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-medium rounded-lg hover:shadow-lg transition-all group">
                  Ver Framework Completo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1" />
                </a>
                <a
                  href="https://modelcontextprotocol.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800 transition-all"
                >
                  <Network className="mr-2 w-5 h-5" />
                  Saiba Mais sobre MCP
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
