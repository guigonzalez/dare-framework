/**
 * Client-side zip generation for pack download.
 */
import JSZip from "jszip";
import { loadPackFiles } from "./pack-loader";

export async function downloadPack(levelId: string): Promise<void> {
  const files = await loadPackFiles(levelId);
  const zip = new JSZip();
  const folderName = `dare-os-pack-level-${levelId}`;

  for (const file of files) {
    // Extract path relative to pack root to preserve structure
    const prefix = `level-${levelId}/`;
    const idx = file.path.indexOf(prefix);
    const relativePath = idx >= 0 ? file.path.slice(idx + prefix.length) : file.name;
    zip.file(`${folderName}/${relativePath}`, file.content);
  }

  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${folderName}.zip`;
  a.click();
  URL.revokeObjectURL(url);
}
