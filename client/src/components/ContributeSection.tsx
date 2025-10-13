import { motion } from "framer-motion";
import { Github, Linkedin, Edit3, User, BookOpen, Clock, Tag, Sparkles } from "lucide-react";

const changelog = [
  {
    version: "2.0.0",
    date: "13 de Outubro de 2025",
    type: "major",
    changes: [
      "Expandido de 6 para 7 níveis do framework",
      "Adicionado novo Nível 3.5 - IA Colaborativa Avançada",
      "Atualização de todas as ferramentas para 2025 (Figma Make, Claude 3.5 Sonnet, Cursor AI)",
      "Métricas quantificadas para cada nível (25-40%, 50-70%, etc.)",
      "Redesign completo da interface com animações modernas",
      "Implementação de navegação por setas na seção de Recursos"
    ]
  },
  {
    version: "1.5.0",
    date: "Setembro de 2024",
    type: "minor",
    changes: [
      "Melhorias de acessibilidade (WCAG 2.1 AA)",
      "Adicionadas cores temáticas para cada conceito",
      "Otimização de performance e carregamento",
      "Documentação expandida"
    ]
  },
  {
    version: "1.0.0",
    date: "Agosto de 2024",
    type: "major",
    changes: [
      "Lançamento inicial do DARE Framework",
      "6 níveis de adoção de IA definidos",
      "Documentação completa em português",
      "Website interativo publicado"
    ]
  }
];

export default function ContributeSection() {
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getVersionBadgeColor = (type: string) => {
    switch (type) {
      case "major":
        return "bg-gradient-to-r from-blue-500 to-blue-600 text-white";
      case "minor":
        return "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white";
      case "patch":
        return "bg-gradient-to-r from-gray-500 to-gray-600 text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <section id="contribute" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
              Código Aberto
            </div>
            <h2 className="gradient-text mb-4">Contribua com o DARE</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              O Framework DARE é de código aberto e orientado pela comunidade. Convidamos designers, pesquisadores e especialistas em IA para ajudar a desenvolver este recurso.
            </p>
          </motion.div>

          {/* Contribution Cards */}
          <motion.div
            className="grid gap-6 md:gap-8 sm:grid-cols-2 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Suggest Changes Card */}
            <motion.div variants={cardVariants} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-60 transition duration-300 blur-sm"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md">
                    <Edit3 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">Sugerir Mudanças</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Proponha modificações aos níveis existentes do framework, descrições ou exemplos através de issues no GitHub ou pull requests.
                </p>
                <a
                  href="https://github.com/guigonzalez/dare-framework/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group/link"
                >
                  Abrir uma issue
                  <svg className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Creator Card */}
            <motion.div variants={cardVariants} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-60 transition duration-300 blur-sm"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">Sobre o Criador</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Gui Gonzalez é um designer apaixonado por processos, que busca incorporar a IA de forma sadia no mercado de Design, para que um novo design surja junto com as mudanças de paradigma.
                </p>
                <a
                  href="https://br.linkedin.com/in/guigonzalez/pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group/link"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Conectar no LinkedIn
                  <svg className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Changelog Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                Histórico de Versões
              </h3>
              <p className="mt-2 text-gray-600">Acompanhe a evolução do DARE Framework</p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {changelog.map((entry, index) => (
                <motion.div
                  key={entry.version}
                  className="relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getVersionBadgeColor(entry.type)}`}>
                          <Tag className="w-3 h-3 mr-1" />
                          v{entry.version}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {entry.date}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {entry.changes.map((change, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Guidelines Section */}
          <motion.div
            id="diretrizes"
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-gray-900">Diretrizes de Contribuição</h3>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-gray-700 text-lg">
                  O Framework DARE é disponibilizado sob a{" "}
                  <a
                    href="https://creativecommons.org/licenses/by-sa/4.0/"
                    className="text-primary hover:text-primary/90 font-medium underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Licença Creative Commons BY-SA
                  </a>
                  , permitindo compartilhamento livre e adaptação com a devida atribuição.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Para contribuir:</h4>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3 mt-0.5">1.</span>
                    <span>Faça um fork do repositório no GitHub</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3 mt-0.5">2.</span>
                    <span>Crie um branch para sua contribuição</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3 mt-0.5">3.</span>
                    <span>Faça suas alterações seguindo nossos padrões de código e documentação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3 mt-0.5">4.</span>
                    <span>Envie um pull request com uma descrição clara das alterações</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3 mt-0.5">5.</span>
                    <span>Participe do processo de revisão</span>
                  </li>
                </ol>

                <div className="mt-8 flex items-center justify-center">
                  <a
                    href="https://github.com/guigonzalez/dare-framework"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    Ver no GitHub
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
