import { motion } from "framer-motion";
import { Heart, Shield, Users, Zap, Target } from "lucide-react";

const principles = [
  {
    icon: Zap,
    title: "IA como ferramenta, não como mestre",
    description: "Acreditamos que a inteligência artificial deve amplificar a criatividade humana, não substituí-la. O DARE posiciona a IA como uma ferramenta colaborativa no conjunto de ferramentas do designer, sujeita à sua direção criativa e julgamento.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    icon: Shield,
    title: "Transparência acima da opacidade",
    description: "Defendemos uma comunicação clara sobre como e quando a IA é usada nos processos de design. Clientes, usuários e equipes merecem entender o papel que a automação desempenha no trabalho criativo.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50"
  },
  {
    icon: Heart,
    title: "Resultados centrados no ser humano",
    description: "O objetivo final do design permanece inalterado: criar soluções que atendam às necessidades humanas. A IA deve avançar essa missão, não comprometê-la através da homogeneização ou diminuição da empatia.",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    icon: Target,
    title: "Adaptabilidade com responsabilidade",
    description: "Reconhecemos que as capacidades da IA continuarão a evoluir. O Framework DARE fornece uma estrutura flexível para incorporar novas ferramentas e técnicas, mantendo limites de uso responsáveis.",
    color: "from-amber-500 to-orange-500",
    bgColor: "from-amber-50 to-orange-50"
  },
  {
    icon: Users,
    title: "Avanço inclusivo",
    description: "Apoiamos a democratização do design enquanto preservamos o valor da expertise. O nível adequado de integração de IA deve ser determinado pelas necessidades do projeto, não apenas por capacidades técnicas.",
    color: "from-rose-500 to-red-500",
    bgColor: "from-rose-50 to-red-50"
  }
];

export default function ManifestoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="manifesto" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1 mb-3 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Nossos Valores
            </div>
            <h2 className="gradient-text">Manifesto do Framework DARE</h2>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            className="relative mb-16 p-8 bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl border-l-4 border-primary shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed italic pl-8">
              "O Design AI Reliable Engagement (DARE) existe para ajudar designers a navegar com responsabilidade pelo cenário em evolução das ferramentas de IA—criando uma linguagem comum para equipes e clientes enquanto preserva a criatividade humana."
            </p>
          </motion.blockquote>

          {/* Principles */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nossos Princípios</h3>

            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${principle.color} rounded-2xl opacity-0 group-hover:opacity-30 transition duration-300 blur-sm`}></div>
                <div className={`relative bg-gradient-to-br ${principle.bgColor} backdrop-blur-sm border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 p-3 bg-gradient-to-br ${principle.color} rounded-lg shadow-md`}>
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-gray-400 font-normal">{index + 1}.</span>
                        {principle.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 mb-6">
              Quer ajudar a moldar o futuro do design com IA?
            </p>
            <a
              href="#contribute"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              Contribuir com o Framework
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
