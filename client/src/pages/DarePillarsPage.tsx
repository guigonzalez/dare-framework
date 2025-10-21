import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Target, Zap, Users, TrendingUp, AlertCircle, Lightbulb, Brain, Cog, Heart, BarChart3, Shield, Sparkles } from "lucide-react";

const pillars = [
  {
    id: "decisao",
    title: "Decisão",
    subtitle: "O que a IA deve fazer?",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    description: "Define claramente o problema, o objetivo e os critérios de sucesso antes de implementar qualquer automação.",
    longDescription: "A Decisão é o pilar fundamental que estabelece a direção estratégica do uso de IA. Antes de automatizar, é essencial entender profundamente o problema que está sendo resolvido, definir métricas claras de sucesso e estabelecer limites éticos e operacionais.",
    principles: [
      {
        title: "Clareza de Propósito",
        description: "Defina o problema real que a IA vai resolver, não apenas a tecnologia que você quer usar",
        example: "Em vez de 'usar IA para design', defina 'reduzir tempo de criação de variações de layout em 60%'"
      },
      {
        title: "Critérios de Sucesso",
        description: "Estabeleça métricas mensuráveis e objetivas para avaliar se a solução está funcionando",
        example: "Taxa de aprovação do cliente, tempo economizado, qualidade percebida (NPS), custo por iteração"
      },
      {
        title: "Limites e Guardrails",
        description: "Defina o que a IA NÃO deve fazer, protegendo valores da marca e qualidade",
        example: "IA pode gerar variações, mas decisões finais de branding permanecem humanas"
      },
      {
        title: "Contexto e Restrições",
        description: "Mapeie as condições do ambiente onde a IA vai operar",
        example: "Considere regulamentações (LGPD), infraestrutura disponível, maturidade da equipe"
      }
    ],
    questions: [
      "Qual problema específico estamos tentando resolver?",
      "Como mediremos se a solução está funcionando?",
      "O que acontece se a IA falhar?",
      "Quais decisões devem permanecer humanas?",
      "Quais são os riscos éticos e de marca?"
    ],
    antiPatterns: [
      "Implementar IA porque 'todo mundo está usando'",
      "Não definir métricas claras de sucesso",
      "Ignorar considerações éticas até surgir um problema",
      "Não envolver stakeholders na definição do problema"
    ]
  },
  {
    id: "automacao",
    title: "Automação",
    subtitle: "Como a IA vai executar?",
    icon: Cog,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    description: "Escolhe as ferramentas e workflows adequados ao nível de maturidade do time e complexidade do problema.",
    longDescription: "A Automação trata da implementação prática: quais ferramentas usar, como integrar sistemas, e qual nível de autonomia dar à IA. Este pilar conecta a estratégia (Decisão) com a execução técnica.",
    principles: [
      {
        title: "Escolha Baseada em Maturidade",
        description: "Selecione ferramentas compatíveis com o nível técnico atual da equipe",
        example: "Time iniciante: ChatGPT e Midjourney (no-code). Time avançado: APIs customizadas e fine-tuning"
      },
      {
        title: "Progressão Gradual",
        description: "Comece simples e evolua conforme o time ganha confiança e competência",
        example: "Fase 1: IA assistiva para research → Fase 2: Geração de variações → Fase 3: Sistemas modulares"
      },
      {
        title: "Integração de Sistemas",
        description: "Conecte a IA com os processos e ferramentas existentes do time",
        example: "Integrar geração de imagens com Design System, versionamento e aprovações"
      },
      {
        title: "Autonomia Controlada",
        description: "Defina claramente onde a IA age sozinha e onde precisa de supervisão",
        example: "IA gera automaticamente mas publica apenas após aprovação humana"
      }
    ],
    questions: [
      "Qual nível DARE estamos hoje? (0-5)",
      "Quais ferramentas já usamos e quais precisamos adicionar?",
      "Como a IA se integra com nosso workflow atual?",
      "Onde colocar pontos de revisão humana?",
      "Qual o plano de evolução de ferramentas?"
    ],
    antiPatterns: [
      "Adotar ferramentas complexas sem capacitação adequada",
      "Não integrar IA com processos existentes",
      "Dar autonomia total sem supervisão em áreas críticas",
      "Ficar preso em ferramentas básicas quando o time está pronto para evoluir"
    ]
  },
  {
    id: "relevancia",
    title: "Relevância",
    subtitle: "A IA está entregando valor?",
    icon: Target,
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
    description: "Mede continuamente se os outputs da IA estão alinhados com as necessidades reais do negócio e dos usuários.",
    longDescription: "Relevância garante que a IA não está apenas funcionando tecnicamente, mas gerando valor real. Este pilar conecta os outputs da IA com métricas de negócio, satisfação do usuário e objetivos estratégicos.",
    principles: [
      {
        title: "Métricas de Valor",
        description: "Vá além de métricas técnicas e meça o impacto no negócio",
        example: "Não apenas 'IA gera 100 imagens/hora', mas 'reduziu custo de produção em 45%' e 'aumentou velocidade de lançamento'"
      },
      {
        title: "Feedback Contínuo",
        description: "Estabeleça loops de feedback com usuários finais e stakeholders",
        example: "Revisar NPS, taxa de aprovação, tempo de iteração, satisfação da equipe mensalmente"
      },
      {
        title: "Qualidade Percebida",
        description: "Avalie não apenas eficiência, mas se a qualidade atende às expectativas",
        example: "Outputs de IA mantêm identidade da marca? Clientes aceitam o nível de personalização?"
      },
      {
        title: "Evolução Adaptativa",
        description: "Use insights de relevância para ajustar estratégia e ferramentas",
        example: "Se IA gera muito mas aprova pouco, revisar prompts ou subir nível de supervisão"
      }
    ],
    questions: [
      "Os outputs da IA estão resolvendo o problema original?",
      "Qual o ROI real em tempo e custo?",
      "Os usuários/clientes estão satisfeitos com os resultados?",
      "A qualidade está consistente ao longo do tempo?",
      "O que precisamos ajustar com base nos dados?"
    ],
    antiPatterns: [
      "Medir apenas métricas técnicas (velocidade, volume) sem impacto de negócio",
      "Não coletar feedback de usuários finais",
      "Continuar com uma solução ineficaz só porque 'já está implementada'",
      "Ignorar sinais de que a IA não está gerando valor esperado"
    ]
  },
  {
    id: "engajamento",
    title: "Engajamento",
    subtitle: "O time adota e evolui com a IA?",
    icon: Heart,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    description: "Garante que o time compreende, confia e evolui continuamente no uso de IA, evitando resistência e estagnação.",
    longDescription: "Engajamento é o pilar humano do DARE. Tecnologia sozinha não transforma times - é preciso capacitação, motivação, cultura de experimentação e suporte contínuo para que as pessoas adotem e evoluam com a IA.",
    principles: [
      {
        title: "Capacitação Progressiva",
        description: "Treine o time de forma contínua, respeitando diferentes níveis de habilidade",
        example: "Workshops mensais, office hours, documentação interna, champions de IA por squad"
      },
      {
        title: "Cultura de Experimentação",
        description: "Crie espaço seguro para testar, falhar e aprender",
        example: "20% do tempo para experimentar novas ferramentas, hackathons de IA, prêmios para inovação"
      },
      {
        title: "Comunicação Transparente",
        description: "Compartilhe sucessos, falhas e aprendizados abertamente",
        example: "Newsletter mensal de casos de uso, showcase de projetos, retrospectivas sobre o que funcionou e o que não"
      },
      {
        title: "Suporte Contínuo",
        description: "Ofereça recursos e ajuda quando a equipe enfrenta desafios",
        example: "Canal de dúvidas, mentoria 1:1, biblioteca de prompts e templates"
      }
    ],
    questions: [
      "O time se sente confiante para usar as ferramentas de IA?",
      "Há resistência ou ceticismo? Por quê?",
      "Como estamos capacitando continuamente o time?",
      "As pessoas estão experimentando e inovando?",
      "O time compartilha aprendizados entre si?"
    ],
    antiPatterns: [
      "Implementar IA sem treinamento adequado",
      "Punir erros em vez de celebrar aprendizados",
      "Não ouvir preocupações e resistências do time",
      "Deixar pessoas 'para trás' conforme a tecnologia avança"
    ]
  }
];

const interactionModel = [
  {
    step: "1. Decisão guia Automação",
    description: "Objetivos claros determinam quais ferramentas e nível de automação usar",
    example: "Decidiu reduzir tempo de iteração em 60%? Isso define se precisa de Midjourney (Nível 2) ou sistema modular (Nível 4)"
  },
  {
    step: "2. Automação gera dados de Relevância",
    description: "Ferramentas em execução produzem métricas que revelam se estão entregando valor",
    example: "Sistema automatizado mostra: 200 variações geradas, mas apenas 10% aprovadas - sinal de baixa relevância"
  },
  {
    step: "3. Relevância informa ajustes na Decisão",
    description: "Métricas de valor real podem exigir revisão de objetivos ou estratégia",
    example: "ROI abaixo do esperado pode indicar que o problema real era outro, levando a redefinir a Decisão"
  },
  {
    step: "4. Engajamento sustenta todo o ciclo",
    description: "Time capacitado e motivado opera, mede e evolui os outros três pilares",
    example: "Equipe engajada identifica problemas de relevância rapidamente e propõe ajustes de automação"
  }
];

export default function DarePillarsPage() {
  return (
    <main className="flex-grow bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-primary/10 via-purple-50 to-blue-50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1 mb-6 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Framework DARE
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Os 4 Pilares para Domar a IA no Design
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Uma estrutura eficiente e explicativa sobre como estruturar decisões de IA com <strong>Decisão, Automação, Relevância e Engajamento</strong>.
              </p>

              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200">
                <AlertCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-700">
                  <strong>DARE</strong> não é sobre tecnologia — é sobre <strong>método</strong>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Os 4 Pilares do DARE
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Cada pilar responde a uma pergunta crítica no uso de IA para design
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.a
                    key={pillar.id}
                    href={`#${pillar.id}`}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${pillar.color} rounded-2xl opacity-20 group-hover:opacity-60 transition duration-300 blur-sm`}></div>
                    <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-gray-100 group-hover:border-transparent">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                      <p className="text-sm font-medium text-gray-500 mb-3">{pillar.subtitle}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Explorar <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Pillars Sections */}
      {pillars.map((pillar, pillarIndex) => {
        const Icon = pillar.icon;
        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`py-16 ${pillarIndex % 2 === 0 ? 'bg-gradient-to-br from-gray-50 to-white' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Pillar Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{pillar.title}</h2>
                      <p className="text-lg text-gray-600 font-medium">{pillar.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {pillar.longDescription}
                  </p>

                  {/* Principles */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Lightbulb className="w-6 h-6 text-primary" />
                      Princípios Fundamentais
                    </h3>
                    <div className="space-y-6">
                      {pillar.principles.map((principle, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h4>
                          <p className="text-gray-600 mb-3">{principle.description}</p>
                          <div className={`bg-gradient-to-r ${pillar.bgColor} rounded-lg p-4 border-l-4 border-${pillar.color.split('-')[1]}-500`}>
                            <p className="text-sm font-medium text-gray-700">
                              <strong>Exemplo:</strong> {principle.example}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Key Questions */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <AlertCircle className="w-6 h-6 text-primary" />
                      Perguntas-Chave
                    </h3>
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <ul className="space-y-3">
                        {pillar.questions.map((question, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 text-${pillar.color.split('-')[1]}-600 flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-700">{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Anti-Patterns */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-red-600" />
                      Anti-Padrões a Evitar
                    </h3>
                    <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                      <ul className="space-y-3">
                        {pillar.antiPatterns.map((antiPattern, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{antiPattern}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Interaction Model Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center px-4 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Sistema Integrado
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Como os Pilares Interagem
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  DARE não é uma sequência linear — é um sistema onde cada pilar informa e fortalece os outros
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {interactionModel.map((interaction, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                        {idx + 1}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{interaction.step}</h3>
                        <p className="text-gray-600 mb-3">{interaction.description}</p>
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border-l-4 border-primary">
                          <p className="text-sm font-medium text-gray-700">
                            <strong>Exemplo prático:</strong> {interaction.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 bg-white rounded-xl p-8 shadow-lg border-2 border-emerald-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Resultado do Sistema</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Quando os 4 pilares operam em harmonia, você tem <strong>decisões de IA bem fundamentadas</strong>,
                      <strong> automação no nível certo</strong>, <strong>valor mensurável</strong> e um <strong>time capacitado e motivado</strong>.
                      Isso não é IA pelo hype — é IA com propósito estratégico.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Pronto para aplicar os pilares DARE?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Comece avaliando o nível de maturidade da sua organização com nosso teste gratuito
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/aplicar/teste-maturidade"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  Fazer Teste de Maturidade
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/aplicar"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 group"
                >
                  Explorar Recursos
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
