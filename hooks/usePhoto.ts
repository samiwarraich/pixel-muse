import { useState, useCallback, useMemo } from "react";
import { isPhoto } from "@/utils";
import { getPhoto } from "@/services";
import { IPhoto, IError } from "@/types";
import { ColorService } from "react-color-palette";
import { useDownloadImage, useColorPicker } from "@/hooks";

interface UsePhotoProps {
  photo: IPhoto | IError;
}

const usePhoto = ({ photo }: UsePhotoProps) => {
  const [imgUrl, setImgUrl] = useState(isPhoto(photo) ? photo.image : "");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(!isPhoto(photo) ? photo.error : "");
  const [rand, setRand] = useState(isPhoto(photo) ? photo.rand : 1);
  const { downloadImage } = useDownloadImage({ setError });
  const {
    colors,
    setColors,
    colorsHex,
    setColorsHex,
    setShowColorPickers,
    showColorPickers,
    toggleColorPicker,
  } = useColorPicker({
    initialColors: isPhoto(photo)
      ? photo.colors.map((color) => ColorService.convert("hex", color))
      : [],
  });

  const onDownload = useCallback(() => {
    downloadImage(imgUrl);
  }, [downloadImage, imgUrl]);

  const onReload = useCallback(async () => {
    setError("");
    setIsLoading(true);
    setShowColorPickers(colors.map(() => false));
    const isDifferent = colors.some(
      (color, index) => color.hex !== colorsHex[index].hex
    );
    const newPhoto = await getPhoto({
      isClient: true,
      newColors: isDifferent ? colors.map(({ rgb: { a, ...rgb } }) => rgb) : [],
      randValue: isDifferent ? rand : undefined,
    });
    if (isPhoto(newPhoto)) {
      setImgUrl(newPhoto.image);
      setRand(newPhoto.rand);
      const newColors = newPhoto.colors.map((color) =>
        ColorService.convert("hex", color)
      );
      setColorsHex(newColors);
      setColors(newColors);
      setShowColorPickers(newPhoto.colors.map(() => false));
    } else {
      setError(newPhoto?.error);
    }
    setIsLoading(false);
  }, [colors, colorsHex, rand, setColors, setColorsHex, setShowColorPickers]);

  return useMemo(
    () => ({
      imgUrl,
      isLoading,
      error,
      onDownload,
      onReload,
      colors,
      setColors,
      showColorPickers,
      setShowColorPickers,
      toggleColorPicker,
    }),
    [
      imgUrl,
      isLoading,
      error,
      onDownload,
      onReload,
      colors,
      setColors,
      showColorPickers,
      setShowColorPickers,
      toggleColorPicker,
    ]
  );
};

export default usePhoto;
