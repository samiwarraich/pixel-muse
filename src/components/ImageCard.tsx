"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiDownload, FiRefreshCw } from "react-icons/fi";
import { useDownloadImage } from "@/hooks";
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
import { useColor, toColor } from "react-color-palette";

interface ImageItemProps {
  photo: Photo | ErrorData;
}

const ImageItem = ({ photo }: ImageItemProps) => {
  const imageCardRef = useRef<HTMLDivElement>(null);
  const [imgUrl, setImgUrl] = useState(isPhoto(photo) ? photo.image : "");
  const [isColorChanged, setIsColorChanged] = useState(false);
  const [error, setError] = useState(isPhoto(photo) ? "" : photo.error);
  const [isLoading, setIsLoading] = useState(false);
  const { downloadImage } = useDownloadImage();
  const [firstColor, setFirstColor] = useColor(
    "hex",
    isPhoto(photo) ? photo.firstColor : ""
  );
  const [secondColor, setSecondColor] = useColor(
    "hex",
    isPhoto(photo) ? photo.secondColor : ""
  );
  const [showColorPicker, setShowColorPicker] = useState({
    first: false,
    second: false,
  });

  useEffect(() => {
    if (
      isPhoto(photo) &&
      (firstColor.hex !== photo.firstColor ||
        secondColor.hex !== photo.secondColor)
    ) {
      setIsColorChanged(true);
    } else {
      setIsColorChanged(false);
    }
  }, [firstColor.hex, secondColor.hex, photo]);

  const onToggleColorPicker = (picker: "first" | "second") => {
    setShowColorPicker((prevState) => ({
      first: picker === "first" ? !prevState.first : false,
      second: picker === "second" ? !prevState.second : false,
    }));
  };

  const onDownload = () => {
    downloadImage(imgUrl);
  };

  const onReload = async () => {
    setIsLoading(true);
    setShowColorPicker({ first: false, second: false });
    const photo = await getPhoto(
      true,
      isColorChanged ? firstColor.rgb : undefined,
      isColorChanged ? secondColor.rgb : undefined
    );
    if (isPhoto(photo)) {
      setImgUrl(photo.image);
      setFirstColor(toColor("hex", photo.firstColor));
      setSecondColor(toColor("hex", photo.secondColor));
      setError("");
    } else {
      setError(photo.error);
    }
    setIsLoading(false);
  };

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

export default ImageItem;
