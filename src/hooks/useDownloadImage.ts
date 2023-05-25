import { useCallback } from "react";

export function useDownloadImage() {
  const downloadImage = useCallback(async (imageUrl: string) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = `pixel-muse-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }, []);

  return { downloadImage };
}
