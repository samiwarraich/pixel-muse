import { useState, useCallback, useMemo } from "react";
import { isPhoto } from "@/utils";
import { getPhoto } from "@/services";
import { ErrorData, Photo } from "@/types";
import { toColor } from "react-color-palette";
import { useDownloadImage, useColorPicker } from "@/hooks";

interface UsePhotoProps {
  photo: Photo | ErrorData;
}

const usePhoto = ({ photo }: UsePhotoProps) => {
  const fbq = window.fbq !== undefined && window.fbq;
  const [imgUrl, setImgUrl] = useState(isPhoto(photo) ? photo.image : "");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(!isPhoto(photo) ? photo.error : "");
  const { downloadImage } = useDownloadImage({ setError });
  const {
    firstColorHex,
    setFirstColorHex,
    secondColorHex,
    setSecondColorHex,
    firstColor,
    setFirstColor,
    secondColor,
    setSecondColor,
    showColorPicker,
    setShowColorPicker,
    toggleColorPicker,
  } = useColorPicker({
    initialFirstColor: isPhoto(photo) ? photo.firstColor : "",
    initialSecondColor: isPhoto(photo) ? photo.secondColor : "",
  });

  const onDownload = useCallback(() => {
    downloadImage(imgUrl);
  }, [downloadImage, imgUrl]);

  const onReload = useCallback(async () => {
    setError("");
    setIsLoading(true);
    setShowColorPicker({ first: false, second: false });
    const isDiffColor =
      firstColor.hex !== firstColorHex || secondColor.hex !== secondColorHex;
    const photo = await getPhoto({
      isClient: true,
      colorOne: isDiffColor ? firstColor.rgb : undefined,
      colorTwo: isDiffColor ? secondColor.rgb : undefined,
    });
    if (isPhoto(photo)) {
      setImgUrl(photo.image);
      setFirstColorHex(photo.firstColor);
      setSecondColorHex(photo.secondColor);
      setFirstColor(toColor("hex", photo.firstColor));
      setSecondColor(toColor("hex", photo.secondColor));
      fbq("trackCustom", "onReload", photo);
    } else {
      setError(photo?.error);
    }
    setIsLoading(false);
  }, [
    firstColor.hex,
    firstColor.rgb,
    firstColorHex,
    secondColor.hex,
    secondColor.rgb,
    secondColorHex,
    setFirstColor,
    setFirstColorHex,
    setSecondColor,
    setSecondColorHex,
    setShowColorPicker,
    fbq,
  ]);

  return useMemo(
    () => ({
      imgUrl,
      isLoading,
      error,
      onDownload,
      onReload,
      firstColor,
      setFirstColor,
      secondColor,
      setSecondColor,
      showColorPicker,
      toggleColorPicker,
    }),
    [
      imgUrl,
      isLoading,
      error,
      onDownload,
      onReload,
      firstColor,
      setFirstColor,
      secondColor,
      setSecondColor,
      showColorPicker,
      toggleColorPicker,
    ]
  );
};

export default usePhoto;
