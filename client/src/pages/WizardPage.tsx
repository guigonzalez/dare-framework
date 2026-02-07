import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Wand2, CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import wizardRules from "@/data/wizard-rules.json";
import { evaluateWizard } from "@/lib/wizard-evaluate";

type WizardAnswers = Record<string, string>;

const TOTAL_STEPS = 5;

export default function WizardPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<WizardAnswers>({});
  const [result, setResult] = useState<ReturnType<typeof evaluateWizard> | null>(null);

  const questions = wizardRules.questions as Array<{
    id: string;
    label: string;
    options: Array<{ value: string; label: string }>;
  }>;
  const config = {
    rules: wizardRules.rules as Parameters<typeof evaluateWizard>[1]["rules"],
    defaultLevel: wizardRules.defaultLevel as number,
    defaultReason: wizardRules.defaultReason as string,
    defaultGates: wizardRules.defaultGates as string[],
    defaultRisks: wizardRules.defaultRisks as string[],
  };
  const levelDescriptions = wizardRules.levelDescriptions as Record<
    string,
    { name: string; shortName: string; tagline: string }
  >;

  const currentQuestion = questions[step];
  const currentAnswer = answers[currentQuestion?.id];
  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  const handleNext = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
    } else {
      const r = evaluateWizard(answers, config);
      setResult(r);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  const canProceed = currentAnswer !== undefined;

  // Result view
  if (result) {
    const levelDesc = levelDescriptions[String(result.level)] ?? {
      name: `Nível ${result.level}`,
      shortName: `Nível ${result.level}`,
      tagline: "",
    };

    return (
      <main className="flex-grow bg-gradient-to-br from-gray-50 to-gray-100">
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-bold mb-4">
                      {result.level}
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Nível {result.level}: {levelDesc.shortName}
                    </h1>
                    <p className="mt-1 text-gray-600">{levelDesc.tagline}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Justificativa
                      </h2>
                      <p className="text-gray-700 leading-relaxed">{result.reason}</p>
                    </div>

                    <div>
                      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Gates obrigatórios
                      </h2>
                      <ul className="space-y-2">
                        {result.gates.map((gate, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-primary font-medium">{i + 1}.</span>
                            {gate}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                        Riscos se ignorados
                      </h2>
                      <ul className="space-y-2">
                        {result.risks.map((risk, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-amber-600">•</span>
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`/aplicar/packs/${result.packId}`}
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Ver Template Pack
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <div className="mt-6 text-center">
                <button
                  onClick={handleRestart}
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Fazer novamente
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Wizard steps
  return (
    <main className="flex-grow bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <Wand2 className="w-7 h-7" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Decision Wizard
              </h1>
              <p className="mt-2 text-gray-600">
                Recomendação determinística do nível DARE (0–3) para seu contexto
              </p>
            </motion.div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Pergunta {step + 1} de {TOTAL_STEPS}</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    {currentQuestion.label}
                  </h2>
                  <RadioGroup
                    value={currentAnswer}
                    onValueChange={(v) =>
                      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: v }))
                    }
                    className="space-y-3"
                  >
                    {currentQuestion.options.map((opt) => (
                      <div
                        key={opt.value}
                        className={`flex items-center space-x-3 rounded-lg border p-4 cursor-pointer transition-colors ${
                          currentAnswer === opt.value
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, [currentQuestion.id]: opt.value }))
                        }
                      >
                        <RadioGroupItem value={opt.value} id={opt.value} />
                        <Label
                          htmlFor={opt.value}
                          className="flex-1 cursor-pointer font-medium text-gray-700"
                        >
                          {opt.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={step === 0}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="gap-2"
                >
                  {step === TOTAL_STEPS - 1 ? "Ver resultado" : "Próximo"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
