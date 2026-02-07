import { motion } from "framer-motion";
import { BookOpen, Github, ExternalLink } from "lucide-react";

export default function ReferenceRepoPage() {
  return (
    <main className="flex-grow bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <BookOpen className="w-7 h-7" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Referência
              </h1>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                Documentação e repositório de referência do DARE Framework
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Repositório
                </h2>
                <a
                  href="https://github.com/guigonzalez/dare-framework"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Github className="h-5 w-5" />
                  guigonzalez/dare-framework
                  <ExternalLink className="h-4 w-4" />
                </a>
                <p className="mt-3 text-sm text-gray-600">
                  Código-fonte do site DARE Framework e DARE OS. Inclui Wizard, Packs,
                  dados de lifecycle e anti-padrões. Open source sob CC BY-SA 4.0.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Estrutura DARE OS
                </h2>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Wizard</strong> – Recomendação determinística de nível (0–3)
                  </li>
                  <li>
                    <strong>Packs</strong> – Template packs por nível com README, PRD,
                    SDD, registry, rubrica e governance
                  </li>
                  <li>
                    <strong>Lifecycle</strong> – Exploração → Candidatos → Registry →
                    Spec Anchoring → Context Gates
                  </li>
                  <li>
                    <strong>Anti-padrões</strong> – Padrões que quebram níveis e como
                    corrigir
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Licença
                </h2>
                <p className="text-sm text-gray-600">
                  DARE Framework e DARE OS são licenciados sob{" "}
                  <a
                    href="https://creativecommons.org/licenses/by-sa/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Creative Commons BY-SA 4.0
                  </a>
                  . Você pode usar, adaptar e compartilhar, com atribuição e mesma
                  licença.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
