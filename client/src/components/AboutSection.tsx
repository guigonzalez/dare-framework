import { ArrowRightIcon, UsersIcon, BrainIcon, EyeIcon, LightbulbIcon } from "lucide-react";
import { motion } from "framer-motion";

const cardThemes = {
  community: {
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50/50 to-cyan-50/50",
    iconBg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
    hoverBorder: "group-hover:border-blue-300"
  },
  human: {
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50/50 to-pink-50/50",
    iconBg: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
    hoverBorder: "group-hover:border-purple-300"
  },
  transparency: {
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50/50 to-teal-50/50",
    iconBg: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
    hoverBorder: "group-hover:border-emerald-300"
  },
  practical: {
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50/50 to-orange-50/50",
    iconBg: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
    hoverBorder: "group-hover:border-amber-300"
  }
};

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-1 mb-3 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              O que é o DARE Framework?
            </div>
            <h2 className="gradient-text">Sobre o DARE Framework</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              O Design AI Reliable Engagement (DARE) Framework oferece a designers, agências e organizações uma abordagem estruturada para adoção de inteligência artificial em fluxos de trabalho de design—de UI e UX até motion e branding.
            </p>
          </div>
          
          <motion.div
            className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Card 1 - Community */}
            <motion.div variants={cardVariants} className="relative group">
              {/* Decorative circle with icon */}
              <div className="absolute -top-6 left-6 z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cardThemes.community.gradient} shadow-lg flex items-center justify-center`}>
                  <UsersIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cardThemes.community.gradient} rounded-xl opacity-20 group-hover:opacity-60 transition duration-300 blur-sm`}></div>
              <div className={`relative bg-gradient-to-br ${cardThemes.community.bgGradient} backdrop-blur-sm border border-gray-200 ${cardThemes.community.hoverBorder} p-6 pt-10 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <h3 className="text-xl font-semibold text-gray-900">Orientado pela Comunidade</h3>
                <p className="mt-2 text-gray-600">
                  Inspirado em modelos como Creative Commons, o DARE Framework é aberto para contribuição pública e adaptação, criando um sistema vivo que evolui com a tecnologia de IA.
                </p>
                <a href="#contribute" className={`mt-4 inline-flex items-center bg-gradient-to-r ${cardThemes.community.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity font-medium group/link`}>
                  <span>Saiba como contribuir</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Card 2 - Human */}
            <motion.div variants={cardVariants} className="relative group">
              {/* Decorative circle with icon */}
              <div className="absolute -top-6 left-6 z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cardThemes.human.gradient} shadow-lg flex items-center justify-center`}>
                  <BrainIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cardThemes.human.gradient} rounded-xl opacity-20 group-hover:opacity-60 transition duration-300 blur-sm`}></div>
              <div className={`relative bg-gradient-to-br ${cardThemes.human.bgGradient} backdrop-blur-sm border border-gray-200 ${cardThemes.human.hoverBorder} p-6 pt-10 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <h3 className="text-xl font-semibold text-gray-900">Centrado no Humano</h3>
                <p className="mt-2 text-gray-600">
                  O DARE enfatiza que a IA deve aprimorar—não substituir—a criatividade humana, estabelecendo diretrizes que preservam a integridade do trabalho de design enquanto aproveitam as vantagens da IA.
                </p>
                <a href="#manifesto" className={`mt-4 inline-flex items-center bg-gradient-to-r ${cardThemes.human.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity font-medium group/link`}>
                  <span>Leia nosso manifesto</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Card 3 - Transparency */}
            <motion.div variants={cardVariants} className="relative group">
              {/* Decorative circle with icon */}
              <div className="absolute -top-6 left-6 z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cardThemes.transparency.gradient} shadow-lg flex items-center justify-center`}>
                  <EyeIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cardThemes.transparency.gradient} rounded-xl opacity-20 group-hover:opacity-60 transition duration-300 blur-sm`}></div>
              <div className={`relative bg-gradient-to-br ${cardThemes.transparency.bgGradient} backdrop-blur-sm border border-gray-200 ${cardThemes.transparency.hoverBorder} p-6 pt-10 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <h3 className="text-xl font-semibold text-gray-900">Transparência</h3>
                <p className="mt-2 text-gray-600">
                  O framework fornece diretrizes claras sobre divulgação do uso de IA no trabalho de design, ajudando a estabelecer padrões éticos e construir confiança com clientes e usuários.
                </p>
                <a href="#framework" className={`mt-4 inline-flex items-center bg-gradient-to-r ${cardThemes.transparency.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity font-medium group/link`}>
                  <span>Entenda os níveis</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Card 4 - Practical */}
            <motion.div variants={cardVariants} className="relative group">
              {/* Decorative circle with icon */}
              <div className="absolute -top-6 left-6 z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cardThemes.practical.gradient} shadow-lg flex items-center justify-center`}>
                  <LightbulbIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cardThemes.practical.gradient} rounded-xl opacity-20 group-hover:opacity-60 transition duration-300 blur-sm`}></div>
              <div className={`relative bg-gradient-to-br ${cardThemes.practical.bgGradient} backdrop-blur-sm border border-gray-200 ${cardThemes.practical.hoverBorder} p-6 pt-10 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <h3 className="text-xl font-semibold text-gray-900">Prático</h3>
                <p className="mt-2 text-gray-600">
                  Cada nível do framework inclui ferramentas, processos e considerações específicas, tornando-o imediatamente aplicável aos desafios de design do mundo real.
                </p>
                <a href="#framework" className={`mt-4 inline-flex items-center bg-gradient-to-r ${cardThemes.practical.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity font-medium group/link`}>
                  <span>Explore as ferramentas</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="mt-16 text-center">
            <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Um framework para todos os níveis de adoção
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Do Artesanal à Orquestração de Agentes</h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              O DARE Framework organiza a adoção de IA em um espectro de cinco níveis distintos (0 a 4), do manual total aos agentes autônomos com MCP.
            </p>
            
            <div className="mt-8 inline-flex shadow-sm overflow-hidden rounded-lg">
              <a 
                href="#framework" 
                className="px-6 py-3 bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Explorar os Níveis do Framework
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
