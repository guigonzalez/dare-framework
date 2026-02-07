import { motion } from "framer-motion";
import { AlertTriangle, Zap, Shield, ArrowRight } from "lucide-react";
import { antiPatterns } from "@/data/antiPatterns";
import { Badge } from "@/components/ui/badge";

export default function AntiPatternsPage() {
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
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 text-amber-600 mb-4">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Anti-padrões
              </h1>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                Padrões que quebram os níveis DARE e como corrigi-los
              </p>
            </motion.div>

            <div className="space-y-6">
              {antiPatterns.map((ap, index) => (
                <motion.article
                  key={ap.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {ap.title}
                      </h2>
                      <Badge variant="secondary" className="text-xs">
                        Nível {ap.commonLevel}
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          Sinal
                        </h3>
                        <p className="text-gray-700 text-sm">{ap.signal}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1 flex items-center gap-1">
                          <Zap className="h-3 w-3" />
                          Por que é perigoso
                        </h3>
                        <p className="text-gray-700 text-sm">{ap.whyDangerous}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1 flex items-center gap-1">
                          <Shield className="h-3 w-3" />
                          Correção
                        </h3>
                        <p className="text-gray-700 text-sm">{ap.fix}</p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
