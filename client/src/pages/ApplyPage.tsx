import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Building2, Users, Rocket, Mail, ExternalLink, Github, MessageCircle, BookOpen, Award, Lightbulb, Image, Video, FileText, Zap, ChevronRight, ChevronDown } from "lucide-react";

const tiers = [
  {
    name: "DARE Maturity Model",
    subtitle: "Descubra seu nível ideal",
    status: "Em breve",
    isProfessional: false,
    description: "Avaliação científica que determina exatamente qual nível DARE sua organização está pronta para adotar.",
    features: [
      "Teste de 15 minutos com pontuação automática",
      "Recomendação precisa baseada em 5 dimensões",
      "Relatório visual com seu nível ideal"
    ],
    cta: "Fazer o Teste",
    ctaLink: "#maturity",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    name: "Licenciamento Corporativo",
    subtitle: "DARE como padrão do time",
    status: "Disponível",
    isProfessional: true,
    description: "Transforme o DARE na linguagem comum de IA responsável da sua organização.",
    features: [
      "Licença anual com workshops inclusos",
      "Certificação oficial para o time",
      "Suporte direto do criador"
    ],
    cta: "Solicitar Proposta",
    ctaLink: "#licensing",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    name: "Consultoria Estratégica",
    subtitle: "Implementação guiada",
    status: "Disponível",
    isProfessional: true,
    description: "Aplique o DARE em projetos reais com mentoria especializada do início ao fim.",
    features: [
      "Workshop prático com seus desafios",
      "Roadmap personalizado de adoção",
      "Acompanhamento na implementação"
    ],
    cta: "Agendar Conversa",
    ctaLink: "#consulting",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50"
  }
];

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
  const [openWorkflow, setOpenWorkflow] = useState<string | null>(null);
  const [openTemplate, setOpenTemplate] = useState<string | null>(null);
  const [openTroubleshoot, setOpenTroubleshoot] = useState<string | null>(null);

  const toggleWorkflow = (workflow: string) => {
    setOpenWorkflow(openWorkflow === workflow ? null : workflow);
  };

  const toggleTemplate = (template: string) => {
    setOpenTemplate(openTemplate === template ? null : template);
  };

  const toggleTroubleshoot = (issue: string) => {
    setOpenTroubleshoot(openTroubleshoot === issue ? null : issue);
  };

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

        {/* Educational Resources Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
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
                  Guia de Prompt Engineering para Design
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Aprenda a estrutura perfeita para criar prompts eficazes e dominar as ferramentas de IA de 2025
                </p>
              </motion.div>

              {/* Anatomia do Prompt Perfeito */}
              <motion.div
                className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Zap className="w-7 h-7 text-primary" />
                  A Anatomia do Prompt Perfeito
                </h3>
                <p className="text-gray-600 mb-4">
                  Todo prompt eficaz segue uma estrutura hierárquica de 5 componentes que determina a qualidade do resultado:
                </p>
                <div className="bg-blue-50 border-l-4 border-primary rounded-r-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Nota:</strong> Existem diversas anatomias e estruturas de prompts no mercado. No DARE Framework, optamos por essa estrutura de 5 componentes por ser a mais ampla e funcional para diferentes ferramentas de IA, facilitando processos e garantindo consistência nos resultados.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm mb-3">1</div>
                    <h4 className="font-bold text-blue-900 mb-2">CONTEXTO</h4>
                    <p className="text-sm text-blue-700">Cenário e objetivo do projeto</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm mb-3">2</div>
                    <h4 className="font-bold text-green-900 mb-2">TAREFA</h4>
                    <p className="text-sm text-green-700">Ação específica desejada</p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-xl p-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm mb-3">3</div>
                    <h4 className="font-bold text-orange-900 mb-2">ESPECIFICAÇÕES</h4>
                    <p className="text-sm text-orange-700">Detalhes técnicos precisos</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl p-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm mb-3">4</div>
                    <h4 className="font-bold text-purple-900 mb-2">ESTILO</h4>
                    <p className="text-sm text-purple-700">Direção visual e atmosfera</p>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-200 rounded-xl p-4">
                    <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm mb-3">5</div>
                    <h4 className="font-bold text-cyan-900 mb-2">REFINAMENTOS</h4>
                    <p className="text-sm text-cyan-700">Ajustes e restrições finais</p>
                  </div>
                </div>
              </motion.div>

              {/* Workflows por Tipo de Conteúdo */}
              <div className="space-y-4 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Workflows e Exemplos Práticos</h3>

                {/* Imagens */}
                <motion.div
                  className="bg-white border-2 border-blue-200 rounded-xl overflow-hidden transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <button
                    onClick={() => toggleWorkflow('images')}
                    className="w-full flex items-center justify-between p-6 hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Image className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-bold text-gray-900">Workflow para Imagens</h4>
                        <p className="text-sm text-gray-600">DALL-E 3 → GPT Image 1 → Nano Banana</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
                        openWorkflow === 'images' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openWorkflow === 'images' && (
                    <div className="px-6 pb-6 space-y-4 border-t border-blue-200">
                    <div>
                      <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">1</span>
                        GPT Image 1 (Realista)
                      </h5>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-xs font-mono text-gray-700 leading-relaxed mb-4">
                          <strong className="text-blue-900">CONTEXTO:</strong> Campanha de marca para empresa de tecnologia sustentável.<br/>
                          <strong className="text-blue-900">TAREFA:</strong> Crie uma fotografia profissional corporativa em estúdio.<br/>
                          <strong className="text-blue-900">ESPECIFICAÇÕES:</strong> Executivo masculino de 40 anos, terno azul marinho bem cortado, camisa branca, gravata discreta. Expressão confiante mas acessível, braços cruzados levemente.<br/>
                          <strong className="text-blue-900">ESTILO:</strong> Background gradient cinza neutro. Iluminação suave tipo softbox, sem sombras duras. Shot 85mm, f/2.8, foco nítido.<br/>
                          <strong className="text-blue-900">REFINAMENTOS:</strong> Estilo clean e moderno, cores corporativas, alta resolução para impressão.
                        </p>
                        <div className="mt-4 border-t border-blue-300 pt-4">
                          <p className="text-xs font-semibold text-blue-900 mb-2">📸 Resultado:</p>
                          <img
                            src="/GPT Image 1 Result.png"
                            alt="Resultado GPT Image 1 - Executivo corporativo"
                            className="w-full rounded-lg shadow-md"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">2</span>
                        Nano Banana (Edição Inteligente)
                      </h5>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-xs font-mono text-gray-700 leading-relaxed mb-4">
                          <strong className="text-blue-900">CONTEXTO:</strong> Personalização para redes sociais da empresa.<br/>
                          <strong className="text-blue-900">TAREFA:</strong> Transforme esta pessoa em uma figura de ação colecionável estilo Funko Pop.<br/>
                          <strong className="text-blue-900">ESPECIFICAÇÕES:</strong> Mantenha exatamente as mesmas características faciais e expressão. Adicione proporções caricatas típicas: cabeça grande (60% do corpo), corpo pequeno.<br/>
                          <strong className="text-blue-900">ESTILO:</strong> Coloque em uma caixa de colecionador com janela transparente e fundo colorido vibrante (azul tecnológico #0066FF). Estilo 3D render realista com iluminação suave.<br/>
                          <strong className="text-blue-900">REFINAMENTOS:</strong> Preserve o terno e gravata no estilo Funko, adicione pequenos detalhes de marca na caixa.
                        </p>
                        <div className="mt-4 border-t border-blue-300 pt-4">
                          <p className="text-xs font-semibold text-blue-900 mb-2">🎨 Resultado:</p>
                          <img
                            src="/Nano Banana Result.png"
                            alt="Resultado Nano Banana - Funko Pop style"
                            className="w-full rounded-lg shadow-md"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-300 rounded-lg p-4">
                      <p className="text-sm text-blue-900">
                        <strong>💡 Dica:</strong> Use GPT Image 1 para imagens realistas e conservadoras. Evite elementos fantasiosos e use termos técnicos de fotografia para melhores resultados.
                      </p>
                    </div>
                    </div>
                  )}
                </motion.div>

                {/* Vídeos */}
                <motion.div
                  className="bg-white border-2 border-purple-200 rounded-xl overflow-hidden transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <button
                    onClick={() => toggleWorkflow('videos')}
                    className="w-full flex items-center justify-between p-6 hover:bg-purple-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Video className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-bold text-gray-900">Workflow para Vídeos</h4>
                        <p className="text-sm text-gray-600">Kling AI → SORA 2 → VEO 3</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-purple-600 transition-transform duration-300 ${
                        openWorkflow === 'videos' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openWorkflow === 'videos' && (
                    <div className="px-6 pb-6 space-y-4 border-t border-purple-200">
                    <div>
                      <h5 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">1</span>
                        Kling AI (Teste Rápido - 5-10s)
                      </h5>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="text-xs font-mono text-gray-700 leading-relaxed mb-4">
                          <strong className="text-purple-900">CONTEXTO:</strong> Vídeo promocional para aplicativo de design.<br/>
                          <strong className="text-purple-900">TAREFA:</strong> Mostre jovem designer sorrindo trabalhando em tablet digital, desenhando logo colorido.<br/>
                          <strong className="text-purple-900">ESPECIFICAÇÕES:</strong> Mesa organizada com plantas suculentas e xícara de café. Movimento: câmera fixa, designer gesticulando naturalmente com a caneta stylus.<br/>
                          <strong className="text-purple-900">ESTILO:</strong> Luz natural suave entrando pela janela. Cores vibrantes mas harmoniosas (paleta pastel). Ambiente moderno e inspirador.<br/>
                          <strong className="text-purple-900">REFINAMENTOS:</strong> Duração: 5 segundos. Foco no tablet e nas mãos. Máximo 2 elementos principais em movimento.
                        </p>
                        <div className="mt-4 border-t border-purple-300 pt-4">
                          <p className="text-xs font-semibold text-purple-900 mb-2">🎬 Resultado:</p>
                          <video
                            controls
                            className="w-full rounded-lg shadow-md"
                            poster="/Kling AI Video Result.mp4"
                          >
                            <source src="/Kling AI Video Result.mp4" type="video/mp4" />
                            Seu navegador não suporta vídeos HTML5.
                          </video>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">2</span>
                        SORA 2 (Cinematográfico)
                      </h5>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="text-xs font-mono text-gray-700 leading-relaxed">
                          <strong className="text-purple-900">CONTEXTO:</strong> Vídeo institucional para startup tech.<br/>
                          <strong className="text-purple-900">TAREFA:</strong> Crie um wide shot cinematográfico de uma executiva confiante caminhando por um escritório moderno.<br/>
                          <strong className="text-purple-900">ESPECIFICAÇÕES:</strong> Escritório com vidro e aço, arquitetura contemporânea. Movimento de câmera: smooth tracking shot acompanhando lateralmente a 2 metros de distância. Equipe trabalhando colaborativamente ao fundo, ligeiramente desfocado (bokeh f/2.8).<br/>
                          <strong className="text-purple-900">ESTILO:</strong> Luz natural suave das 16h, reflexos sutis no vidro. Paleta de cores neutra e profissional (cinzas, brancos, toques de azul corporativo). Atmosfera inspiradora e dinâmica.<br/>
                          <strong className="text-purple-900">REFINAMENTOS:</strong> Duração: 8 segundos. Som ambiente: rumor baixo de escritório (conversas distantes), passos no piso de madeira, som sutil de teclados. Transição suave no início e fim.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">3</span>
                        VEO 3 (Controle Total com Áudio)
                      </h5>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="text-xs font-mono text-gray-700 leading-relaxed mb-4">
                          <strong className="text-purple-900">CONTEXTO:</strong> Depoimento para case de sucesso B2B.<br/>
                          <strong className="text-purple-900">TAREFA:</strong> Crie vídeo realista de consultora de marketing explicando estratégia para câmera.<br/>
                          <strong className="text-purple-900">ESPECIFICAÇÕES:</strong> Ela olha para câmera e diz: "O segredo está na personalização da experiência do cliente. Quando você entende as necessidades reais, a conversão aumenta naturalmente." Gesticula naturalmente com as mãos, expressão confiante e acessível. Escritório moderno com whiteboards estratégicos ao fundo.<br/>
                          <strong className="text-purple-900">ESTILO:</strong> Dolly shot suave aproximando lentamente durante a fala (de medium shot para medium close-up). Luz natural equilibrada com fill light suave. Profundidade de campo cinematográfica.<br/>
                          <strong className="text-purple-900">REFINAMENTOS:</strong> Áudio claro e profissional: voz feminina confiante e calorosa, dicção perfeita. Som ambiente baixo: ar condicionado suave, leve eco de sala. Duração total: 10 segundos. Fade out suave no áudio.
                        </p>
                        <div className="mt-4 border-t border-purple-300 pt-4">
                          <p className="text-xs font-semibold text-purple-900 mb-2">🎥 Resultado:</p>
                          <video
                            controls
                            className="w-full rounded-lg shadow-md"
                            poster="/VEO 3 Result.mp4"
                          >
                            <source src="/VEO 3 Result.mp4" type="video/mp4" />
                            Seu navegador não suporta vídeos HTML5.
                          </video>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-lg p-4">
                      <p className="text-sm text-purple-900">
                        <strong>💡 Dicas para Vídeo:</strong> Use Kling AI para protótipos rápidos (máx. 10s, movimentos simples). SORA 2 para qualidade cinematográfica (descreva movimentos de câmera como diretor). VEO 3 quando precisar de diálogos específicos (coloque falas entre aspas e descreva áudio em camadas).
                      </p>
                    </div>
                    </div>
                  )}
                </motion.div>

                {/* Textos */}
                <motion.div
                  className="bg-white border-2 border-emerald-200 rounded-xl overflow-hidden transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <button
                    onClick={() => toggleWorkflow('text')}
                    className="w-full flex items-center justify-between p-6 hover:bg-emerald-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-bold text-gray-900">Workflow para Textos</h4>
                        <p className="text-sm text-gray-600">ChatGPT → Claude</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-emerald-600 transition-transform duration-300 ${
                        openWorkflow === 'text' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openWorkflow === 'text' && (
                    <div className="px-6 pb-6 space-y-4 border-t border-emerald-200">
                    <div>
                      <h5 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">1</span>
                        ChatGPT (Copy Estratégico)
                      </h5>
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                        <p className="text-xs font-mono text-gray-700 leading-relaxed">
                          <strong className="text-emerald-900">CONTEXTO:</strong> Landing page para SaaS B2B de gestão de projetos com IA. Público: CTOs e gerentes de produto de empresas tech com 50-500 funcionários.<br/>
                          <strong className="text-emerald-900">TAREFA:</strong> Crie um copy persuasivo para o hero section focado no benefício principal: redução de 40% no tempo de planejamento de sprints.<br/>
                          <strong className="text-emerald-900">ESPECIFICAÇÕES:</strong> Headline (máx. 12 palavras) + subheadline (máx. 25 palavras) + 2 bullet points de benefícios específicos. Use dados quantificados quando possível.<br/>
                          <strong className="text-emerald-900">ESTILO:</strong> Tom: profissional mas acessível, confiante sem arrogância. Linguagem clara e direta. Evite jargões desnecessários. Foco em resultados mensuráveis, não features.<br/>
                          <strong className="text-emerald-900">REFINAMENTOS:</strong> Inclua um CTA claro e orientado à ação. Destaque o diferencial da IA sem usar buzzwords genéricos. Formato markdown para facilitar implementação.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">2</span>
                        Claude (Análise e Refinamento)
                      </h5>
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                        <p className="text-xs font-mono text-gray-700 leading-relaxed">
                          <strong className="text-emerald-900">CONTEXTO:</strong> Você é um copywriter sênior especializado em SaaS B2B. Analise este copy criado para uma landing page.<br/>
                          <strong className="text-emerald-900">TAREFA:</strong> Avalie criticamente este copy considerando: (1) Clareza da proposta de valor, (2) Força do CTA, (3) Conexão emocional com o público-alvo, (4) Diferenciação competitiva.<br/>
                          <strong className="text-emerald-900">ESPECIFICAÇÕES:</strong> Para cada elemento, forneça: nota de 1-10, pontos fortes identificados, fraquezas específicas com exemplos, sugestões concretas de melhoria.<br/>
                          <strong className="text-emerald-900">ESTILO:</strong> Análise objetiva e construtiva. Use exemplos práticos. Evite críticas genéricas.<br/>
                          <strong className="text-emerald-900">REFINAMENTOS:</strong> Conclua com uma versão otimizada do copy implementando suas sugestões. Explique brevemente cada mudança feita e o raciocínio por trás dela.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-300 rounded-lg p-4">
                      <p className="text-sm text-emerald-900">
                        <strong>💡 Dica:</strong> Use ChatGPT para geração inicial rápida e criativa. Claude é superior para análise profunda, refinamento e quando você precisa de raciocínio estruturado. Combine os dois em ciclos iterativos para resultados otimizados.
                      </p>
                    </div>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Templates Prontos por Contexto */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
                  <BookOpen className="w-7 h-7 text-amber-600" />
                  Templates Prontos por Contexto
                </h3>

                <div className="space-y-4">
                  {/* Social Media */}
                  <div className="bg-white rounded-xl border-2 border-amber-200 overflow-hidden">
                    <button
                      onClick={() => toggleTemplate('social')}
                      className="w-full flex items-center justify-between p-6 hover:bg-amber-50 transition-colors"
                    >
                      <h4 className="font-bold text-amber-900 flex items-center gap-2">
                        <span className="px-3 py-1 bg-amber-100 rounded-full text-sm">Social Media</span>
                      </h4>
                      <ChevronDown
                        className={`w-6 h-6 text-amber-600 transition-transform duration-300 ${
                          openTemplate === 'social' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openTemplate === 'social' && (
                      <div className="px-6 pb-6 border-t border-amber-200">
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                      <p className="text-xs font-mono text-gray-700 leading-relaxed">
                        [FERRAMENTA: GPT Image 1]<br/><br/>
                        <strong>CONTEXTO:</strong> Post para Instagram de [marca/produto].<br/>
                        <strong>TAREFA:</strong> Crie fotografia lifestyle autêntica mostrando [produto] sendo usado naturalmente por [público-alvo demográfico específico].<br/>
                        <strong>ESPECIFICAÇÕES:</strong> [Ambiente específico - ex: "café moderno", "home office aconchegante"]. Momento candido e espontâneo. Composição: regra dos terços, espaço negativo no [posição] para texto overlay.<br/>
                        <strong>ESTILO:</strong> Luz natural suave. Cores: [paleta da marca com códigos hex]. Atmosfera aspiracional mas acessível.<br/>
                        <strong>REFINAMENTOS:</strong> Formato quadrado 1:1, alta resolução. Foco no produto mas contexto natural.
                      </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Corporate */}
                  <div className="bg-white rounded-xl border-2 border-amber-200 overflow-hidden">
                    <button
                      onClick={() => toggleTemplate('corporate')}
                      className="w-full flex items-center justify-between p-6 hover:bg-amber-50 transition-colors"
                    >
                      <h4 className="font-bold text-amber-900 flex items-center gap-2">
                        <span className="px-3 py-1 bg-amber-100 rounded-full text-sm">Corporate</span>
                      </h4>
                      <ChevronDown
                        className={`w-6 h-6 text-amber-600 transition-transform duration-300 ${
                          openTemplate === 'corporate' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openTemplate === 'corporate' && (
                      <div className="px-6 pb-6 border-t border-amber-200">
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                      <p className="text-xs font-mono text-gray-700 leading-relaxed">
                        [FERRAMENTA: SORA 2]<br/><br/>
                        <strong>CONTEXTO:</strong> Vídeo corporativo para [empresa] demonstrando [valor da empresa - ex: "inovação", "colaboração"].<br/>
                        <strong>TAREFA:</strong> Mostre [cena específica com funcionários - ex: "time de designers colaborando em projeto"]. <br/>
                        <strong>ESPECIFICAÇÕES:</strong> Smooth tracking shot percorrendo o ambiente. Escritório moderno, luz natural. Funcionários diversos interagindo genuinamente. Duração: 6-8 segundos.<br/>
                        <strong>ESTILO:</strong> Cinematográfico profissional. Paleta neutra e sofisticada. Atmosfera inspiradora e humana.<br/>
                        <strong>REFINAMENTOS:</strong> Áudio: música instrumental sutil de fundo, sons naturais de escritório baixos. Transições suaves.
                      </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* E-commerce */}
                  <div className="bg-white rounded-xl border-2 border-amber-200 overflow-hidden">
                    <button
                      onClick={() => toggleTemplate('ecommerce')}
                      className="w-full flex items-center justify-between p-6 hover:bg-amber-50 transition-colors"
                    >
                      <h4 className="font-bold text-amber-900 flex items-center gap-2">
                        <span className="px-3 py-1 bg-amber-100 rounded-full text-sm">E-commerce</span>
                      </h4>
                      <ChevronDown
                        className={`w-6 h-6 text-amber-600 transition-transform duration-300 ${
                          openTemplate === 'ecommerce' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openTemplate === 'ecommerce' && (
                      <div className="px-6 pb-6 border-t border-amber-200">
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                      <p className="text-xs font-mono text-gray-700 leading-relaxed">
                        [FERRAMENTA: Nano Banana]<br/><br/>
                        <strong>CONTEXTO:</strong> Foto de produto para loja online.<br/>
                        <strong>TAREFA:</strong> Coloque este [produto] (preserve exatamente como está) em [contexto de uso ideal - ex: "mesa de jantar elegante", "setup de escritório minimalista"].<br/>
                        <strong>ESPECIFICAÇÕES:</strong> Ambiente: [descrição detalhada do cenário]. Mantenha proporções e cores originais do produto. Adicione [props relevantes - ex: "laptop, caderno, planta suculenta"].<br/>
                        <strong>ESTILO:</strong> Iluminação de produto profissional. Atmosfera: [mood específico - ex: "clean e moderno", "aconchegante e acolhedor"].<br/>
                        <strong>REFINAMENTOS:</strong> Fundo levemente desfocado (f/4) para destacar produto. Sombras naturais e sutis.
                      </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Troubleshooting */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
                  <Zap className="w-7 h-7 text-red-600" />
                  Troubleshooting: Problemas Comuns e Soluções
                </h3>

                <div className="space-y-4">
                  {/* Problema 1 */}
                  <div className="bg-white rounded-xl border-2 border-red-200 overflow-hidden">
                    <button
                      onClick={() => toggleTroubleshoot('text')}
                      className="w-full flex items-start gap-3 p-6 hover:bg-red-50 transition-colors"
                    >
                      <span className="text-red-600 font-bold text-lg flex-shrink-0">❌</span>
                      <div className="flex-1 text-left">
                        <h4 className="font-bold text-red-900 mb-1">Problema: Texto ilegível em imagens</h4>
                        <p className="text-sm text-gray-600">
                          Quando o texto gerado aparece distorcido, borrado ou com erros ortográficos.
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-red-600 flex-shrink-0 transition-transform duration-300 ${
                          openTroubleshoot === 'text' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openTroubleshoot === 'text' && (
                      <div className="px-6 pb-6 border-t border-red-200">
                        <div className="bg-green-50 border-l-4 border-green-400 pl-6 py-4 mt-4">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 font-bold text-lg">✅</span>
                        <div className="flex-1">
                          <h5 className="font-bold text-green-900 mb-2">Solução:</h5>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li><strong>• Use aspas duplas:</strong> "TEXTO EXATO AQUI"</li>
                            <li><strong>• Especifique posição:</strong> "text centered at top", "text in bottom-right corner"</li>
                            <li><strong>• Limite palavras:</strong> Máximo 3-4 palavras por vez</li>
                            <li><strong>• Exemplo prático:</strong> 'Add text "SALE 50% OFF" centered at top in bold red letters'</li>
                          </ul>
                        </div>
                      </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Problema 2 */}
                  <div className="bg-white rounded-xl border-2 border-red-200 overflow-hidden">
                    <button
                      onClick={() => toggleTroubleshoot('movement')}
                      className="w-full flex items-start gap-3 p-6 hover:bg-red-50 transition-colors"
                    >
                      <span className="text-red-600 font-bold text-lg flex-shrink-0">❌</span>
                      <div className="flex-1 text-left">
                        <h4 className="font-bold text-red-900 mb-1">Problema: Movimentos não naturais em vídeo</h4>
                        <p className="text-sm text-gray-600">
                          Personagens ou objetos se movem de forma artificial, robótica ou fisicamente impossível.
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-red-600 flex-shrink-0 transition-transform duration-300 ${
                          openTroubleshoot === 'movement' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openTroubleshoot === 'movement' && (
                      <div className="px-6 pb-6 border-t border-red-200">
                        <div className="bg-green-50 border-l-4 border-green-400 pl-6 py-4 mt-4">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 font-bold text-lg">✅</span>
                        <div className="flex-1">
                          <h5 className="font-bold text-green-900 mb-2">Solução:</h5>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li><strong>• Descreva física realista:</strong> "following natural physics", "smooth and gradual movement"</li>
                            <li><strong>• Evite ações complexas:</strong> Uma ação principal por vez, não múltiplos movimentos simultâneos</li>
                            <li><strong>• Use movimentos sequenciais:</strong> "first she looks left, then slowly turns to camera"</li>
                            <li><strong>• Exemplo prático:</strong> "Person walking naturally at normal pace, arms swinging gently, following real-world physics"</li>
                          </ul>
                        </div>
                      </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Problema 3 */}
                  <div className="bg-white rounded-xl border-2 border-red-200 overflow-hidden">
                    <button
                      onClick={() => toggleTroubleshoot('consistency')}
                      className="w-full flex items-start gap-3 p-6 hover:bg-red-50 transition-colors"
                    >
                      <span className="text-red-600 font-bold text-lg flex-shrink-0">❌</span>
                      <div className="flex-1 text-left">
                        <h4 className="font-bold text-red-900 mb-1">Problema: Inconsistência de estilo entre gerações</h4>
                        <p className="text-sm text-gray-600">
                          Cada imagem ou vídeo gerado tem estilo completamente diferente, quebrando a identidade visual.
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-red-600 flex-shrink-0 transition-transform duration-300 ${
                          openTroubleshoot === 'consistency' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openTroubleshoot === 'consistency' && (
                      <div className="px-6 pb-6 border-t border-red-200">
                        <div className="bg-green-50 border-l-4 border-green-400 pl-6 py-4 mt-4">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 font-bold text-lg">✅</span>
                        <div className="flex-1">
                          <h5 className="font-bold text-green-900 mb-2">Solução:</h5>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li><strong>• Use templates padronizados:</strong> Crie um prompt base e apenas mude o conteúdo específico</li>
                            <li><strong>• Especifique elementos constantes:</strong> "maintain exact same [lighting/color palette/style]"</li>
                            <li><strong>• Referência imagens anteriores:</strong> "using the same visual style as previous image"</li>
                            <li><strong>• Inclua código de cores:</strong> Use hex codes específicos (#FF5733) em vez de nomes de cores</li>
                            <li><strong>• Exemplo de template:</strong> Salve "Product photography: white background, soft lighting from top-left at 45°, f/8, colors: #FFFFFF bg, #0066FF accent" e reutilize</li>
                          </ul>
                        </div>
                      </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Principais Takeaways */}
              <motion.div
                className="bg-gradient-to-br from-primary/10 to-blue-50 border-2 border-primary/30 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Principais Takeaways</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Cada ferramenta tem seu contexto ideal</strong> - não use SORA 2 para vídeos simples nem Kling AI para cinema
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Estrutura é mais importante que criatividade</strong> - siga as 5 etapas da anatomia do prompt
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Especificidade técnica gera resultados profissionais</strong> - inclua dimensões, cores hex, configurações de câmera
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Combine ferramentas para workflows poderosos</strong> - use Nano Banana para editar outputs do GPT Image 1
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Templates mantêm consistência</strong> - padronize prompts para projetos da mesma marca
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Troubleshooting economiza tempo</strong> - conheça as soluções para problemas comuns antes que aconteçam
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <p className="text-sm text-gray-600 italic">
                    💡 O prompt engineering é a nova linguagem do design. Designers que dominam essa habilidade criarão trabalhos mais precisos, eficientes e impactantes, mantendo sua criatividade humana como diferencial insubstituível.
                  </p>
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
                        href="#licensing"
                        className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group"
                      >
                        Solicitar proposta
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
                        href="#consulting"
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

        {/* Contact Forms Section */}
        <section id="contato" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Maturity Test Form */}
                <motion.div
                  id="maturity"
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Rocket className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">DARE Maturity Model</h3>
                  <p className="text-gray-600 mb-6">
                    Faça o teste de maturidade e descubra qual nível DARE é ideal para sua organização. Baseado em 5 dimensões críticas.
                  </p>
                  <a
                    href="/aplicar/teste-maturidade"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Fazer o Teste Agora
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
