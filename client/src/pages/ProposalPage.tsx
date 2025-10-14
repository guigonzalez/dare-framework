import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Building2, Users, Sparkles, Mail, FileText, TrendingUp, Award, Shield, Zap } from "lucide-react";

interface PricingTier {
  id: string;
  name: string;
  minEmployees: number;
  maxEmployees: number | null;
  pricePerUser: number;
  minPrice: number;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: "startup",
    name: "Startup",
    minEmployees: 1,
    maxEmployees: 50,
    pricePerUser: 120,
    minPrice: 6000,
    description: "Para times enxutos que querem estruturar IA desde o início",
    features: [
      "Acesso completo ao DARE Framework",
      "Treinamento in company estruturado",
      "Material didático e templates",
      "Suporte por e-mail",
      "Updates e melhorias contínuas",
      "Licença anual renovável"
    ]
  },
  {
    id: "growth",
    name: "Growth",
    minEmployees: 51,
    maxEmployees: 200,
    pricePerUser: 90,
    minPrice: 18000,
    description: "Para empresas em crescimento que precisam escalar com método",
    features: [
      "Tudo do plano Startup",
      "Treinamento in company aprofundado",
      "Onboarding guiado (2 sessões)",
      "Suporte prioritário",
      "Acesso a webinars exclusivos",
      "Consultoria inicial (4h)"
    ],
    highlighted: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    minEmployees: 201,
    maxEmployees: null,
    pricePerUser: 60,
    minPrice: 36000,
    description: "Para organizações que querem o DARE como padrão corporativo",
    features: [
      "Tudo do plano Growth",
      "Treinamento in company customizado",
      "Customização do framework",
      "Suporte dedicado 24/7",
      "Workshops presenciais (trimestral)",
      "Consultoria estratégica (20h/ano)",
      "Integração com ferramentas internas"
    ]
  }
];

export default function ProposalPage() {
  const [companySize, setCompanySize] = useState<number>(50);
  const [selectedTier, setSelectedTier] = useState<PricingTier>(pricingTiers[0]);
  const [calculatedPrice, setCalculatedPrice] = useState<number>(6000);

  const handleCompanySizeChange = (size: number) => {
    setCompanySize(size);

    // Find the appropriate tier
    const tier = pricingTiers.find(t =>
      size >= t.minEmployees && (t.maxEmployees === null || size <= t.maxEmployees)
    ) || pricingTiers[pricingTiers.length - 1];

    setSelectedTier(tier);

    // Calculate price
    const calculatedValue = size * tier.pricePerUser;
    const finalPrice = Math.max(calculatedValue, tier.minPrice);
    setCalculatedPrice(finalPrice);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const generateEmailSubject = () => {
    return `Proposta DARE - ${selectedTier.name} - ${companySize} colaboradores`;
  };

  const generateEmailBody = () => {
    const monthlyPrice = Math.round(calculatedPrice / 12);
    return `Olá!

Gostaria de receber uma proposta comercial do DARE Framework com as seguintes características:

📊 Informações da Empresa:
- Número de colaboradores: ${companySize}
- Plano sugerido: ${selectedTier.name}

💰 Valores Calculados:
- Investimento anual: ${formatCurrency(calculatedPrice)}
- Investimento mensal: ${formatCurrency(monthlyPrice)}
- Custo por colaborador/ano: ${formatCurrency(selectedTier.pricePerUser)}

📦 Inclui:
${selectedTier.features.map(f => `- ${f}`).join('\n')}

Aguardo contato para discutir detalhes e próximos passos.

Atenciosamente,
[Seu nome]
[Empresa]`;
  };

  return (
    <main className="flex-grow bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1 mb-4 border border-purple-400/30 rounded-full bg-purple-400/10 text-purple-700 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Proposta Automatizada
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Licenciamento Corporativo DARE
              </h1>
              <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                Transforme o DARE na linguagem comum de IA responsável de toda sua organização
              </p>
              <p className="text-base text-gray-500 mb-2 max-w-2xl mx-auto">
                <strong>Inclui treinamento in company estruturado</strong> para capacitar seus colaboradores
              </p>
              <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                Calcule o investimento baseado no tamanho da sua empresa e receba uma proposta personalizada
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculadora" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 md:p-12 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Calculadora de Investimento</h2>
                <p className="text-gray-600">Ajuste o número de colaboradores para ver o plano e valores recomendados</p>
              </div>

              {/* Company Size Slider */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <label className="flex items-center text-lg font-semibold text-gray-900">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    Número de Colaboradores
                  </label>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-purple-600" />
                    <span className="text-3xl font-bold text-purple-600">{companySize}</span>
                  </div>
                </div>

                <input
                  type="range"
                  min="1"
                  max="500"
                  value={companySize}
                  onChange={(e) => handleCompanySizeChange(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  style={{
                    background: `linear-gradient(to right, rgb(147 51 234) 0%, rgb(147 51 234) ${(companySize / 500) * 100}%, rgb(233 213 255) ${(companySize / 500) * 100}%, rgb(233 213 255) 100%)`
                  }}
                />

                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1</span>
                  <span>100</span>
                  <span>200</span>
                  <span>300</span>
                  <span>500+</span>
                </div>
              </div>

              {/* Selected Tier Display */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-purple-300 mb-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">Plano {selectedTier.name}</h3>
                      {selectedTier.highlighted && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-md">
                          <Award className="w-3 h-3 mr-1" />
                          Mais Popular
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{selectedTier.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <TrendingUp className="w-4 h-4 mr-2 text-purple-600" />
                      Investimento Anual
                    </div>
                    <div className="text-4xl font-bold text-purple-600">
                      {formatCurrency(calculatedPrice)}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      ou {formatCurrency(Math.round(calculatedPrice / 12))}/mês
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Users className="w-4 h-4 mr-2 text-blue-600" />
                      Custo por Colaborador
                    </div>
                    <div className="text-4xl font-bold text-blue-600">
                      {formatCurrency(selectedTier.pricePerUser)}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      por ano (≈ {formatCurrency(Math.round(selectedTier.pricePerUser / 12))}/mês)
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-purple-600" />
                    O que está incluído
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedTier.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href={`mailto:guiperezgo@gmail.com?subject=${encodeURIComponent(generateEmailSubject())}&body=${encodeURIComponent(generateEmailBody())}`}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Solicitar Proposta Comercial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Receberemos seu pedido e entraremos em contato em até 24 horas úteis
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
                Por que licenciar o DARE?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vantagens de transformar o DARE no padrão de IA da sua organização
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Governança Clara</h3>
                <p className="text-gray-600">
                  Estabeleça critérios objetivos para uso de IA, reduzindo riscos e aumentando transparência nas decisões.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Velocidade Segura</h3>
                <p className="text-gray-600">
                  Acelere a adoção de IA sem comprometer qualidade. Times alinham expectativas e entregam resultados confiáveis.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Linguagem Comum</h3>
                <p className="text-gray-600">
                  Todo o time fala a mesma língua sobre IA. Documentação padronizada e comunicação eficiente entre áreas.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* All Tiers Comparison */}
      <section id="planos" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Todos os Planos
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Compare as opções e escolha a melhor para o tamanho da sua organização
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  className={`bg-white rounded-xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${
                    tier.highlighted ? 'border-purple-400' : 'border-gray-200'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {tier.highlighted && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-md">
                        <Award className="w-3 h-3 mr-1" />
                        Mais Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tier.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-gray-900">{formatCurrency(tier.pricePerUser)}</span>
                      <span className="text-gray-500 ml-2">/colaborador/ano</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {tier.minEmployees} - {tier.maxEmployees || '500+'} colaboradores
                    </div>
                    <div className="text-sm font-semibold text-purple-600 mt-2">
                      A partir de {formatCurrency(tier.minPrice)}/ano
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Perguntas Frequentes
              </h2>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Como funciona o licenciamento?</h3>
                <p className="text-gray-600">
                  O licenciamento é anual e renovável. Você recebe acesso completo ao DARE Framework, treinamento in company estruturado para seus colaboradores, materiais didáticos, templates e suporte durante todo o período da licença.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">O treinamento in company está incluso?</h3>
                <p className="text-gray-600">
                  Sim! Todos os planos incluem treinamento in company estruturado. O nível de personalização varia por tier: treinamento estruturado no Startup, aprofundado no Growth, e totalmente customizado no Enterprise.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Posso customizar o framework?</h3>
                <p className="text-gray-600">
                  Sim! No plano Enterprise oferecemos customização do framework para atender necessidades específicas da sua organização, incluindo integração com ferramentas internas.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">E se minha empresa crescer durante o ano?</h3>
                <p className="text-gray-600">
                  Seu plano se adapta ao crescimento! Podemos ajustar a licença conforme sua equipe cresce, garantindo que você sempre tenha o melhor custo-benefício.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Qual o processo após solicitar a proposta?</h3>
                <p className="text-gray-600">
                  Após receber sua solicitação, entramos em contato em até 24h úteis para agendar uma conversa, entender melhor suas necessidades e formalizar a proposta comercial personalizada.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para transformar IA em padrão?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Solicite sua proposta personalizada e descubra como o DARE pode estruturar o uso de IA no seu time
              </p>
              <a
                href={`mailto:guiperezgo@gmail.com?subject=${encodeURIComponent(generateEmailSubject())}&body=${encodeURIComponent(generateEmailBody())}`}
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Solicitar Proposta Agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
