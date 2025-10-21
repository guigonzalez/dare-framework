import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Building2, Users, Rocket, Mail, ExternalLink, Github, MessageCircle, BookOpen, Award, Lightbulb, Code } from "lucide-react";

const realApplications = [
  {
    company: "Startups que deixam a IA explicar suas decisões",
    use: "não apenas executá-las",
    result: "60% mais clareza em governança de IA desde o início"
  },
  {
    company: "Squads que sabem quando automatizar",
    use: "e quando pensar junto com a IA",
    result: "Redução de 40% em retrabalho por escolhas mal fundamentadas"
  },
  {
    company: "Consultorias que falam a mesma língua da IA",
    use: "e do cliente",
    result: "Alinhamento de expectativas em 70% menos tempo"
  }
];

export default function ApplyPage() {

  return (
    <main className="flex-grow bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Hero Section */}
        <section id="about" className="relative py-16 sm:py-24 overflow-hidden">
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
                  Framework Open Source
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  A IA não substitui o designer — ela amplifica quem pensa com método
                </h1>
                <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                  O DARE Framework ajuda times a estruturar decisões de IA com confiabilidade, propósito e retorno.
                </p>
                <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
                  Usado por times de design, produto e inovação para transformar IA em raciocínio estratégico — não em hype.
                </p>
                <a
                  href="#modelos"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  Descubra como aplicar o DARE
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Real Applications Section */}
        <section id="aplicacoes" className="py-16 bg-white">
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
                  Quem usa o DARE
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Times que transformam IA em raciocínio estratégico
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
                  href="#modelos"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  Quer aplicar o DARE no seu time?
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Educational Resources Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center px-4 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Recursos Educacionais
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Aprenda a dominar IA no Design
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Guias completos para você criar com inteligência artificial de forma profissional
                </p>
              </motion.div>

              {/* CTAs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Vibe Coding CTA */}
                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-60 transition duration-300 blur-sm"></div>
                  <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-200 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                        <Code className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="ml-4 text-2xl font-bold text-gray-900">Vibe Coding</h3>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">
                      Aprenda a metodologia revolucionária de Andrej Karpathy que transforma descrições em linguagem natural em código funcional. Domine as 6 ferramentas essenciais de 2025.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                        O Vibe Loop: metodologia de 5 etapas
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                        Cursor, Replit, Claude, V0, Windsurf, Lovable
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                        Estruturas de prompt por contexto
                      </li>
                    </ul>
                    <a
                      href="/aplicar/vibe-coding"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group/link"
                    >
                      Acessar Guia Completo
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>

                {/* Prompt Engineering CTA */}
                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-60 transition duration-300 blur-sm"></div>
                  <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-200 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md">
                        <Lightbulb className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="ml-4 text-2xl font-bold text-gray-900">Prompt Engineering</h3>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">
                      Domine a anatomia do prompt perfeito com a estrutura de 5 componentes do DARE. Aprenda workflows práticos para imagens, vídeos e textos com exemplos reais.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                        Estrutura de 5 componentes (CONTEXTO → REFINAMENTOS)
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                        Workflows para GPT Image, SORA 2, VEO 3, Kling AI
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                        Templates prontos e troubleshooting
                      </li>
                    </ul>
                    <a
                      href="/aplicar/prompt-engineering"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group/link"
                    >
                      Acessar Guia Completo
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* DARE Pillars Featured Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-purple-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center px-4 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Framework Essencial
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Entenda os 4 Pilares do DARE
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Uma estrutura completa sobre como domar a IA no design: Decisão, Automação, Relevância e Engajamento
                </p>
              </motion.div>

              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-600 to-blue-600 rounded-2xl opacity-40 group-hover:opacity-70 transition duration-500 blur-lg"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left side - Description */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Domine a IA com Método
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Descubra como estruturar decisões de IA com clareza estratégica. Explore os princípios, perguntas-chave e anti-padrões de cada pilar do framework DARE.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span><strong>Decisão:</strong> O que a IA deve fazer?</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                          <span><strong>Automação:</strong> Como a IA vai executar?</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                          <span><strong>Relevância:</strong> A IA está entregando valor?</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" />
                          <span><strong>Engajamento:</strong> O time adota e evolui?</span>
                        </li>
                      </ul>
                    </div>

                    {/* Right side - Visual & CTA */}
                    <div className="flex flex-col justify-center items-center">
                      <div className="grid grid-cols-2 gap-4 mb-6 w-full max-w-xs">
                        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 text-white text-center shadow-lg">
                          <div className="text-3xl font-bold mb-1">D</div>
                          <div className="text-xs">Decisão</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 text-white text-center shadow-lg">
                          <div className="text-3xl font-bold mb-1">A</div>
                          <div className="text-xs">Automação</div>
                        </div>
                        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl p-4 text-white text-center shadow-lg">
                          <div className="text-3xl font-bold mb-1">R</div>
                          <div className="text-xs">Relevância</div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-4 text-white text-center shadow-lg">
                          <div className="text-3xl font-bold mb-1">E</div>
                          <div className="text-xs">Engajamento</div>
                        </div>
                      </div>
                      <a
                        href="/aplicar/pilares"
                        className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-primary via-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group/btn"
                      >
                        Explorar os 4 Pilares
                        <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section id="modelos" className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Como o DARE se expande na sua organização
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Uma jornada progressiva: de entender sua maturidade até transformar o DARE em padrão do time
                </p>
              </motion.div>

              {/* Journey Flow */}
              <div className="relative">
                {/* Connection Line */}
                <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200 z-0"></div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative z-10">
                  {/* Step 1 - Maturity Model */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 h-full">
                      {/* Step number */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            1
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">Descubra</h3>
                            <p className="text-sm text-blue-600 font-medium">15 minutos</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                          Em breve
                        </span>
                      </div>

                      <h4 className="text-lg font-semibold text-gray-900 mb-2">DARE Maturity Model</h4>
                      <p className="text-gray-600 text-sm mb-6">
                        Teste científico que determina qual nível DARE sua organização está pronta para adotar
                      </p>

                      <a
                        href="/aplicar/teste-maturidade"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                      >
                        Fazer o teste gratuito
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Step 2 - Licensing */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 h-full relative overflow-hidden">
                      {/* Professional badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-md">
                          <Award className="w-3 h-3 mr-1" />
                          Pro
                        </span>
                      </div>

                      {/* Step number */}
                      <div className="flex items-start gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          2
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Adote</h3>
                          <p className="text-sm text-purple-600 font-medium">Licença anual</p>
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Licenciamento Corporativo</h4>
                      <p className="text-gray-600 text-sm mb-6">
                        Transforme o DARE na linguagem comum de IA responsável de toda sua organização
                      </p>

                      <a
                        href="/aplicar/proposta"
                        className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group"
                      >
                        Calcular investimento
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Step 3 - Consulting */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 h-full relative overflow-hidden">
                      {/* Professional badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-md">
                          <Award className="w-3 h-3 mr-1" />
                          Pro
                        </span>
                      </div>

                      {/* Step number */}
                      <div className="flex items-start gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          3
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Implemente</h3>
                          <p className="text-sm text-emerald-600 font-medium">Hands-on</p>
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Consultoria Estratégica</h4>
                      <p className="text-gray-600 text-sm mb-6">
                        Aplique o DARE em projetos reais com mentoria especializada do início ao fim
                      </p>

                      <a
                        href="https://calendar.app.google/7zs5wDSwXJRvgv2V6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group"
                      >
                        Agendar conversa
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom message */}
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-gray-500 text-sm">
                  💡 Comece pelo teste gratuito e evolua no seu ritmo
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DARE Open Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center px-4 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <BookOpen className="w-4 h-4 mr-2" />
                  DARE Open
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  O DARE é um framework aberto
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Qualquer pessoa pode estudar, aplicar e contribuir. Empresas e escolas podem licenciar o uso comercial do método.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/#manifesto"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Leia o Manifesto
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/guigonzalez/dare-framework"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 group"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Contribua no GitHub
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/#contribute"
                    className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300 group"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Junte-se à comunidade
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
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
                  Seu time ainda está automatizando o que não entende?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Vamos conversar sobre como o DARE pode trazer clareza antes da automação
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
  );
}
