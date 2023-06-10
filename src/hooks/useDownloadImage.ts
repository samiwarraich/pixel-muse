import { useCallback } from "react";

interface UseDownloadImageProps {
  setError: (error: string) => void;
  setIsLoading: (error: boolean) => void;
}

const useDownloadImage = ({
  setError,
  setIsLoading,
}: UseDownloadImageProps) => {
  const downloadImage = useCallback(
    async (imageUrl: string) => {
      try {
        setIsLoading(true);
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error("Failed to download image! 🙁");
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = `pixel-muse-${Date.now()}.png`;
        document.body.appendChild(a);
        setTimeout(() => {
          a.click();
          window.URL.revokeObjectURL(url);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        setIsLoading(false);
        if (error instanceof Error) setError(error.message);
      }
    },
    [setError, setIsLoading]
  );

  return { downloadImage };
};

export default useDownloadImage;
