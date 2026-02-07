import { useRoute, Redirect } from "wouter";

/** Redireciona /packs/:levelId para /aplicar/packs/:levelId */
export default function RedirectPackDetail() {
  const [, params] = useRoute("/packs/:levelId");
  const levelId = params?.levelId ?? "0";
  return <Redirect to={`/aplicar/packs/${levelId}`} />;
}
