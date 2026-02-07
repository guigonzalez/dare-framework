/**
 * Load pack file contents. Uses Vite's import.meta.glob with raw.
 */
const packModules = import.meta.glob<string>("../packs/level-*/**/*", {
  query: "?raw",
  import: "default",
});

export const PACK_LEVELS = ["0", "1", "2", "3"] as const;
export type PackLevel = (typeof PACK_LEVELS)[number];

export interface PackFile {
  path: string;
  name: string;
  content: string;
}

export async function loadPackFiles(levelId: string): Promise<PackFile[]> {
  const prefix = `../packs/level-${levelId}/`;
  const entries = Object.entries(packModules).filter(([path]) =>
    path.startsWith(prefix)
  );

  const files: PackFile[] = [];
  for (const [path, loader] of entries) {
    const content = await loader();
    const name = path.split("/").pop() ?? path;
    files.push({ path, name, content });
  }

  // Sort: README first, then alphabetical
  files.sort((a, b) => {
    if (a.name === "README.md") return -1;
    if (b.name === "README.md") return 1;
    return a.path.localeCompare(b.path);
  });

  return files;
}
