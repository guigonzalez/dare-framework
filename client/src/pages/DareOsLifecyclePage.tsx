import { motion } from "framer-motion";
import { Layers, ArrowRight } from "lucide-react";
import { lifecyclePhases, exampleFlow } from "@/data/lifecycle";

export default function DareOsLifecyclePage() {
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
                <Layers className="w-7 h-7" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                DARE OS Lifecycle
              </h1>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                Ciclo unificado: da exploração ao gate de aprovação
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              {lifecyclePhases.map((phase, index) => (
                <article
                  key={phase.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                        {index + 1}
                      </span>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {phase.name}
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-4">{phase.definition}</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Entradas
                        </h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {phase.inputs.map((input, i) => (
                            <li key={i}>• {input}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Saídas
                        </h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {phase.outputs.map((output, i) => (
                            <li key={i}>• {output}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {index < lifecyclePhases.length - 1 && (
                      <div className="mt-4 flex justify-center">
                        <ArrowRight className="h-5 w-5 text-gray-300 rotate-90" />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 bg-white rounded-xl border border-gray-200 p-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Exemplo de fluxo
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Como um log de exploração vira candidatos, registry e specs ancoradas:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                    Exploration
                  </h3>
                  <p className="text-sm text-gray-700">{exampleFlow.exploration}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                    Candidates
                  </h3>
                  <p className="text-sm text-gray-700">{exampleFlow.candidates}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                    Registry
                  </h3>
                  <p className="text-sm text-gray-700">{exampleFlow.registry}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                    Spec Anchoring
                  </h3>
                  <p className="text-sm text-gray-700">{exampleFlow.specAnchoring}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                    Context Gates
                  </h3>
                  <p className="text-sm text-gray-700">{exampleFlow.contextGates}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
