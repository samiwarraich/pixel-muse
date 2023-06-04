"use client";
import { useRef } from "react";
import Image from "next/image";
import { FiDownload, FiRefreshCw } from "react-icons/fi";
import { usePhoto } from "@/hooks";
import {
  ErrorMsg,
  Loader,
  ColorPickerIcon,
  ButtonIcon,
  ColorPicker,
} from "@/components";
import { ErrorData, Photo } from "@/types";
import { isPhoto } from "@/utils";

interface ImageCardProps {
  photo: Photo | ErrorData;
}

const ImageCard = ({ photo }: ImageCardProps) => {
  const imageCardRef = useRef<HTMLDivElement>(null);
  const {
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
  } = usePhoto({ photo });

  const isDisabled = !!error || isLoading;

  return (
    <div
      ref={imageCardRef}
      className="max-w-sm rounded overflow-hidden shadow-lg border-1 border-line backdrop-brightness-125"
    >
      <div className="relative h-80 w-full">
        {isLoading ? (
          <Loader />
        ) : error || !isPhoto(photo) ? (
          <ErrorMsg
            name="image"
            message={error || (photo as ErrorData).error}
          />
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
            alt={`A random pixel image with colors: ${firstColor.hex}, ${secondColor.hex}`}
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
            toggle={toggleColorPicker}
            isDisabled={isDisabled}
          />
          <ColorPickerIcon
            color={secondColor.hex}
            picker={"second"}
            toggle={toggleColorPicker}
            isDisabled={isDisabled}
          />
        </div>
        <ButtonIcon
          onClick={() => {
            onReload();
            if (typeof window !== undefined && window.fbq)
              window.fbq("trackCustom", "onReload", photo);
          }}
          isDisabled={isLoading}
          Icon={FiRefreshCw}
        />
      </div>
    </div>
  );
};

export default ImageCard;
