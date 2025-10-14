import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Building2, Users, Rocket, Mail, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "DARE as a Service",
    subtitle: "Plataforma guiada por IA",
    status: "Em breve",
    description: "Ferramenta digital que permite aplicar o DARE Framework de forma guiada, com scoring automático e relatórios profissionais.",
    features: [
      "Etapas guiadas do framework com orientação de IA",
      "Scoring automático de maturidade e confiabilidade",
      "Exportação de relatórios de decisão",
      "Dashboard de acompanhamento por time",
      "1 projeto gratuito para teste"
    ],
    cta: "Seja Beta Tester",
    ctaLink: "#beta",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    name: "Licenciamento Corporativo",
    subtitle: "DARE como processo interno",
    status: "Disponível",
    description: "Implemente o DARE como metodologia oficial de IA responsável em squads, consultorias e organizações.",
    features: [
      "Licença anual de uso do framework",
      "Workshops e imersões corporativas",
      "Certificação DARE Certified Practitioner",
      "Suporte estratégico contínuo",
      "Customização para seu contexto"
    ],
    cta: "Solicitar Proposta",
    ctaLink: "#licensing",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    name: "Consultoria Estratégica",
    subtitle: "Aplicação em casos reais",
    status: "Disponível",
    description: "Imersões práticas aplicando o método DARE em desafios reais de design e IA da sua organização.",
    features: [
      "Workshop hands-on com casos reais",
      "Diagnóstico de maturidade em IA",
      "Roadmap personalizado de adoção",
      "Mentoria de implementação",
      "Acesso prioritário a atualizações"
    ],
    cta: "Agendar Conversa",
    ctaLink: "#consulting",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50"
  }
];

const realApplications = [
  {
    company: "Startups de Design",
    use: "Estruturam decisões de IA em MVPs com transparência para investidores",
    result: "60% mais clareza em governança de IA desde o início"
  },
  {
    company: "Squads de Produto",
    use: "Aplicam o DARE para avaliar quando automatizar vs. co-criar com IA",
    result: "Redução de 40% em retrabalho por escolhas mal fundamentadas"
  },
  {
    company: "Consultorias de Inovação",
    use: "Usam o framework como linguagem comum em projetos de transformação digital",
    result: "Alinhamento de expectativas cliente-agência em 70% menos tempo"
  }
];

export default function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
                  Aplique o DARE na sua Organização
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Transforme IA em Vantagem Competitiva
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  O DARE não é um curso — é um framework aplicado que gera valor quando usado. De diagnósticos guiados a licenciamento corporativo, escolha como integrar a metodologia no seu contexto.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Real Applications Section */}
        <section className="py-16 bg-white">
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
                  Aplicações Reais do DARE
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  O DARE vem sendo usado por times de produto, inovação e dados para estruturar decisões confiáveis em IA. De startups a corporações, o framework ajuda equipes a desenhar soluções onde a IA é parte do raciocínio, não apenas da automação.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {realApplications.map((app, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Building2 className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.company}</h3>
                    <p className="text-gray-600 text-sm mb-3">{app.use}</p>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-emerald-700">{app.result}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a
                  href="#tiers"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  Quer aplicar o DARE no seu time?
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tiers Section */}
        <section id="tiers" className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
                  Três Formas de Integrar o DARE
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Escolha o modelo que se adapta ao seu contexto — de ferramenta digital a metodologia corporativa
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {tiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${tier.gradient} rounded-2xl opacity-20 group-hover:opacity-40 transition duration-300 blur-sm`}></div>
                    <div className={`relative bg-gradient-to-br ${tier.bgGradient} border border-gray-200 rounded-xl p-8 h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300`}>
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            tier.status === "Em breve"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-emerald-100 text-emerald-700"
                          }`}>
                            {tier.status}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-600 mb-3">{tier.subtitle}</p>
                        <p className="text-gray-700">{tier.description}</p>
                      </div>

                      <div className="flex-grow mb-6">
                        <ul className="space-y-3">
                          {tier.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`} />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={tier.ctaLink}
                        className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${tier.gradient} text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group/cta`}
                      >
                        {tier.cta}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Forms Section */}
        <section id="beta" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Beta Tester Form */}
                <motion.div
                  id="beta"
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Rocket className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">DARE as a Service</h3>
                  <p className="text-gray-600 mb-6">
                    Seja um dos primeiros a testar a plataforma guiada por IA. Vagas limitadas para beta testers.
                  </p>
                  <a
                    href="mailto:contato@dareframework.com.br?subject=Quero ser Beta Tester do DARE"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Inscrever-se para Beta
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>

                {/* Licensing Form */}
                <motion.div
                  id="licensing"
                  className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Building2 className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Licenciamento</h3>
                  <p className="text-gray-600 mb-6">
                    Empresas, consultorias e escolas podem licenciar o DARE como metodologia aplicada.
                  </p>
                  <a
                    href="mailto:contato@dareframework.com.br?subject=Interesse em Licenciamento DARE"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Falar sobre licenciamento
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>

                {/* Consulting Form */}
                <motion.div
                  id="consulting"
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Users className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Consultoria</h3>
                  <p className="text-gray-600 mb-6">
                    Workshops e imersões práticas aplicando o DARE em desafios reais da sua organização.
                  </p>
                  <a
                    href="mailto:contato@dareframework.com.br?subject=Interesse em Consultoria DARE"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Agendar conversa
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
                  Pronto para Integrar o DARE?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Entre em contato e descubra como o framework pode transformar a forma como sua organização trabalha com IA
                </p>
                <a
                  href="mailto:contato@dareframework.com.br?subject=Quero aplicar o DARE"
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

      <Footer />
    </div>
  );
}
