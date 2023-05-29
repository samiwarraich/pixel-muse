"use client";
import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { FiDownload, FiRefreshCw } from "react-icons/fi";
import { useDownloadImage, useColorPicker } from "@/hooks";
import {
  ErrorMsg,
  Loader,
  ColorPickerIcon,
  ButtonIcon,
  ColorPicker,
} from "@/components";
import { getPhoto } from "@/services";
import { isPhoto } from "@/utils";
import { ErrorData, Photo } from "@/types";
import { toColor } from "react-color-palette";

interface ImageCardProps {
  photo: Photo | ErrorData;
}

const ImageCard = ({ photo }: ImageCardProps) => {
  const imageCardRef = useRef<HTMLDivElement>(null);
  const [imgUrl, setImgUrl] = useState(isPhoto(photo) ? photo.image : "");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(!isPhoto(photo) ? photo.error : "");
  const { downloadImage } = useDownloadImage();
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
    onToggleColorPicker,
  } = useColorPicker({
    initialFirstColorHex: isPhoto(photo) ? photo.firstColor : "",
    initialSecondColorHex: isPhoto(photo) ? photo.secondColor : "",
  });

  const onDownload = useCallback(() => {
    downloadImage(imgUrl);
  }, [downloadImage, imgUrl]);

  const onReload = useCallback(async () => {
    setIsLoading(true);
    setShowColorPicker({ first: false, second: false });
    const isDiffColor =
      firstColor.hex !== firstColorHex || secondColor.hex !== secondColorHex;
    const photo = await getPhoto(
      true,
      isDiffColor ? firstColor.rgb : undefined,
      isDiffColor ? secondColor.rgb : undefined
    );
    if (isPhoto(photo)) {
      setImgUrl(photo.image);
      setFirstColorHex(photo.firstColor);
      setSecondColorHex(photo.secondColor);
      setFirstColor(toColor("hex", photo.firstColor));
      setSecondColor(toColor("hex", photo.secondColor));
      setError("");
    } else {
      setError(photo.error);
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
  ]);

  const isDisabled = !!error || isLoading;

  return (
    <div
      ref={imageCardRef}
      className="max-w-sm rounded overflow-hidden shadow-lg border-1 border-line backdrop-brightness-125"
    >
      <div className="relative h-80 w-full">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorMsg name="image" message={error} />
        ) : showColorPicker.first ? (
          <ColorPicker
            width={imageCardRef?.current?.offsetWidth || 0}
            show={showColorPicker.first}
            color={firstColor}
            setColor={setFirstColor}
          />
        ) : showColorPicker.second ? (
          <ColorPicker
            width={imageCardRef?.current?.offsetWidth || 0}
            show={showColorPicker.second}
            color={secondColor}
            setColor={setSecondColor}
          />
        ) : (
          <Image
            src={imgUrl}
            alt={""}
            layout="fill"
            objectFit="cover"
            priority
          />
        )}
      </div>
      <div className="px-6 py-4 flex justify-between">
        <ButtonIcon
          onClick={onDownload}
          isDisabled={isDisabled}
          Icon={FiDownload}
        />
        <div className="flex w-24 justify-between">
          <ColorPickerIcon
            color={firstColor.hex}
            picker={"first"}
            toggle={onToggleColorPicker}
            isDisabled={isDisabled}
          />
          <ColorPickerIcon
            color={secondColor.hex}
            picker={"second"}
            toggle={onToggleColorPicker}
            isDisabled={isDisabled}
          />
        </div>
        <ButtonIcon
          onClick={onReload}
          isDisabled={isLoading}
          Icon={FiRefreshCw}
        />
      </div>
    </div>
  );
};

export default ImageCard;
