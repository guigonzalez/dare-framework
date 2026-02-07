import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { loadPackFiles, PACK_LEVELS } from "@/lib/pack-loader";
import { levelContracts } from "@/data/levelContracts";

export default function PackDetailPage() {
  const [, params] = useRoute("/aplicar/packs/:levelId");
  const rawLevelId = params?.levelId ?? "0";
  const levelId = rawLevelId.startsWith("level-") ? rawLevelId.replace("level-", "") : rawLevelId;
  const [files, setFiles] = useState<Awaited<ReturnType<typeof loadPackFiles>>>([]);
  const [loading, setLoading] = useState(true);

  const validLevel = PACK_LEVELS.includes(levelId as "0" | "1" | "2" | "3");
  const contract = levelContracts.find((c) => c.id === parseInt(levelId, 10));

  useEffect(() => {
    if (!validLevel) {
      setLoading(false);
      return;
    }
    loadPackFiles(levelId)
      .then(setFiles)
      .finally(() => setLoading(false));
  }, [levelId, validLevel]);

  const handleDownload = async () => {
    const { downloadPack } = await import("@/lib/zip-packs");
    await downloadPack(levelId);
  };

  if (!validLevel) {
    return (
      <main className="flex-grow bg-gradient-to-br from-gray-50 to-gray-100">
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Pack não encontrado</h1>
            <p className="mt-2 text-gray-600">
              Níveis disponíveis: 0, 1, 2, 3
            </p>
            <a
              href="/aplicar/packs"
              className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar aos Packs
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="flex-grow bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <a
              href="/aplicar/packs"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar aos Packs
            </a>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      Pack Nível {levelId}
                    </h1>
                    <p className="text-gray-600 mt-1">
                      {contract?.shortName} – {contract?.tagline}
                    </p>
                  </div>
                  <Button onClick={handleDownload} className="gap-2 shrink-0">
                    <Download className="h-4 w-4" />
                    Baixar ZIP
                  </Button>
                </div>
              </div>

              {loading ? (
                <div className="p-12 text-center text-gray-500">
                  Carregando arquivos...
                </div>
              ) : (
                <div className="p-4 sm:p-6">
                  <Tabs defaultValue={files[0]?.path ?? ""} className="w-full">
                    <TabsList className="flex flex-wrap h-auto gap-1 bg-gray-100 p-1">
                      {files.map((file) => (
                        <TabsTrigger
                          key={file.path}
                          value={file.path}
                          className="gap-2 data-[state=active]:bg-white"
                        >
                          <FileText className="h-4 w-4" />
                          {file.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {files.map((file) => (
                      <TabsContent
                        key={file.path}
                        value={file.path}
                        className="mt-4"
                      >
                        <ScrollArea className="h-[400px] rounded-md border border-gray-200 p-4">
                          <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans">
                            {file.content}
                          </pre>
                        </ScrollArea>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
