import { motion } from "framer-motion";
import { TrendingUp, Zap, Target, Users, Shield, Sparkles, ArrowRight, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Produtividade Exponencial",
    description: "Do research à automação completa, ganhos progressivos que se amplificam a cada nível.",
    metrics: [
      { level: "Nível 1-2", value: "25-70%", label: "Aceleração em research e assets" },
{ level: "Nível 3", value: "60-90%", label: "Prompt-to-Prototype" },
  { level: "Nível 4", value: "90-98%", label: "Orquestração de Agentes com MCP" }
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: Zap,
    title: "Qualidade de Iteração",
    description: "Feedback contextual instantâneo e colaboração em tempo real elevam a qualidade das soluções.",
    metrics: [
      { level: "Prompt-to-Prototype", value: "70-90%", label: "Melhoria na qualidade de iterações" },
      { level: "IA Colaborativa", value: "3x", label: "Mais variações exploradas" },
      { level: "Validação", value: "-40%", label: "Redução em ciclos de revisão" }
    ],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    icon: Target,
    title: "Controle Estratégico",
    description: "Escolha o nível ideal para cada projeto, mantendo controle criativo e transparência.",
    metrics: [
      { level: "Framework", value: "5 Níveis", label: "Do manual total aos agentes" },
      { level: "Flexibilidade", value: "100%", label: "Controle sobre o processo" },
      { level: "Adaptação", value: "5x", label: "Capacidade de escala" }
    ],
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50"
  },
  {
    icon: Users,
    title: "Colaboração Ampliada",
    description: "Workspaces compartilhados e IA como parceira fortalecem a dinâmica de equipe.",
    metrics: [
      { level: "Co-edição", value: "Real-time", label: "Colaboração simultânea" },
      { level: "Contexto", value: "200k tokens", label: "Projetos multi-arquivo complexos" },
      { level: "Eficiência", value: "+64%", label: "Resolução autônoma de problemas" }
    ],
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50"
  },
  {
    icon: Shield,
    title: "Transparência Garantida",
    description: "Sistema de AI Credits e badges claros documentam o uso de IA em cada projeto.",
    metrics: [
      { level: "Níveis", value: "5 Badges", label: "AI-Free até AI-Autonomous" },
      { level: "Rastreio", value: "100%", label: "Ferramentas e intervenções" },
      { level: "Conformidade", value: "WCAG AA", label: "Acessibilidade mantida" }
    ],
    gradient: "from-rose-500 to-red-500",
    bgGradient: "from-rose-50 to-red-50"
  },
  {
    icon: BarChart3,
    title: "Governança Estruturada",
    description: "Matriz de risco e diretrizes de mitigação para adoção responsável e escalável.",
    metrics: [
      { level: "Checkpoints", value: "Por Nível", label: "Revisão humana obrigatória" },
      { level: "Auditoria", value: "Regular", label: "Outputs de IA validados" },
      { level: "Training", value: "Contínuo", label: "Competências humanas ativas" }
    ],
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50"
  }
];

export default function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="vantagens" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
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
            <div className="inline-flex items-center justify-center px-4 py-1 mb-3 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <Sparkles className="w-4 h-4 mr-2" />
              Transforme seu Processo
            </div>
            <h2 className="gradient-text mb-4">Vantagens do DARE Framework</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Métricas reais baseadas nas evoluções do mercado de IA em 2026
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                {/* Icon Circle */}
                <div className="absolute -top-6 left-6 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.gradient} shadow-lg flex items-center justify-center`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.gradient} rounded-2xl opacity-20 group-hover:opacity-40 transition duration-300 blur-sm`}></div>
                <div className={`relative bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-sm border border-gray-200 p-6 pt-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{benefit.description}</p>

                  {/* Metrics */}
                  <div className="space-y-3 mt-auto">
                    {benefit.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${benefit.gradient} mt-2`}></div>
                        <div className="flex-1">
                          <div className="flex items-baseline gap-2">
                            <span className={`text-sm font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                              {metric.value}
                            </span>
                            <span className="text-xs text-gray-500">{metric.level}</span>
                          </div>
                          <p className="text-xs text-gray-600">{metric.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 md:p-12 border border-primary/10 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Pronto para Transformar seu Workflow?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore os 5 níveis do framework e descubra qual se adequa melhor ao seu projeto
              </p>
              <a
                href="#framework"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                Explorar os Níveis do Framework
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
