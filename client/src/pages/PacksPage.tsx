import { motion } from "framer-motion";
import { Package, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { levelContracts } from "@/data/levelContracts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PacksPage() {
  return (
    <main className="flex-grow bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <Package className="w-7 h-7" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Template Packs
              </h1>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                Pacotes operacionais por nível DARE (0–3). Nível 4 (Orquestração de Agentes) possui guia dedicado.
              </p>
            </motion.div>

            {/* Level contracts section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contratos operacionais (Níveis 0–4)
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {levelContracts.map((contract) => (
                  <AccordionItem
                    key={contract.id}
                    value={`contract-${contract.id}`}
                    className="bg-white rounded-lg border border-gray-200 px-4"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3 text-left">
                        <span className="font-bold text-primary">
                          Nível {contract.id}
                        </span>
                        <span className="font-medium text-gray-900">
                          {contract.shortName}
                        </span>
                        <span className="text-sm text-gray-500">
                          {contract.tagline}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-4 sm:grid-cols-2 pt-2">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            IA pode
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {contract.aiCanDo.length > 0 ? (
                              contract.aiCanDo.map((item, i) => (
                                <li key={i}>• {item}</li>
                              ))
                            ) : (
                              <li className="text-gray-500">Nada (manual total)</li>
                            )}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-500" />
                            IA não pode
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {contract.aiCannotDo.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Gates obrigatórios
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {contract.requiredGates.map((gate, i) => (
                            <li key={i}>• {gate}</li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={contract.externalLink ?? `/aplicar/packs/${contract.id}`}
                        className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline"
                      >
                        {contract.externalLink ? "Ver guia Agentes & MCP" : "Abrir pack e baixar ZIP"}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* Pack list */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Baixar packs
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {levelContracts.map((contract) => (
                  <a
                    key={contract.id}
                    href={contract.externalLink ?? `/aplicar/packs/${contract.id}`}
                    className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all group"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          Pack Nível {contract.id}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {contract.shortName}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
