import { useCallback } from "react";

interface UseDownloadImageProps {
  setError: (error: string) => void;
}

const useDownloadImage = ({ setError }: UseDownloadImageProps) => {
  const downloadImage = useCallback(
    async (imageUrl: string) => {
      try {
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error("Failed to download image! 🙁");
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = `pixel-muse-${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    },
    [setError]
  );

  return { downloadImage };
};

export default useDownloadImage;
