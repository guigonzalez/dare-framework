import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { config } from "@/data/config";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface EmailCaptureCardProps {
  title: string;
  description: string;
  successMessage?: string;
  /** Campos extras enviados ao Formspree (ex: origem, nivel, nivelNome) */
  formContext?: Record<string, string | number | boolean>;
  /** Chamado quando o e-mail for enviado com sucesso (ex: para liberar conteúdo) */
  onSubmitted?: () => void;
}

export function EmailCaptureCard({
  title,
  description,
  successMessage = "Obrigado! Enviamos para seu e-mail.",
  formContext = {},
  onSubmitted,
}: EmailCaptureCardProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!config.FORMSPREE_FORM_ID) return null;

  return (
    <div className="bg-primary/5 rounded-lg border border-primary/20 p-6">
      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
        <Mail className="w-4 h-4 text-primary" />
        {title}
      </h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      {submitted ? (
        <p className="text-sm text-green-700 font-medium flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          {successMessage}
        </p>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setError(null);
            if (!email.trim()) {
              setError("Informe seu e-mail");
              return;
            }
            setSubmitting(true);
            try {
              const res = await fetch(
                `https://formspree.io/f/${config.FORMSPREE_FORM_ID}`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    email: email.trim(),
                    ...formContext,
                  }),
                }
              );
              if (!res.ok) throw new Error("Erro ao enviar");
              setSubmitted(true);
              onSubmitted?.();
            } catch {
              setError("Não foi possível enviar. Tente novamente.");
            } finally {
              setSubmitting(false);
            }
          }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <Input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting}
              className="flex-1"
            />
            <Button type="submit" disabled={submitting}>
              {submitting ? "Enviando..." : "Enviar"}
            </Button>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      )}
    </div>
  );
}
