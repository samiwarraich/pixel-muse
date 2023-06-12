"use client";
import { useRef, useState } from "react";
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
import { isPhoto, setClarity } from "@/utils";

interface ImageCardProps {
  photo: Photo | ErrorData;
}

const ImageCard = ({ photo }: ImageCardProps) => {
  const imageCardRef = useRef<HTMLDivElement>(null);
  const [buttonPressed, setButtonPressed] = useState("");
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

  const handleClick = (clickOn: string, callback: () => void) => {
    callback();
    setClarity("clickOn", clickOn);
    setButtonPressed(clickOn);
  };

  const isDisabled = !!error || isLoading;

  return (
    <div
      ref={imageCardRef}
      className="max-w-sm rounded overflow-hidden shadow-lg border-[1px] border-dashed border-[#9ba4b5] backdrop-brightness-125"
    >
      <div className="relative h-80 w-full">
        {isLoading ? (
          <Loader height={"70%"} width={"70%"} />
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
          onClick={() => handleClick("download", onDownload)}
          isDisabled={isDisabled}
          Icon={FiDownload}
          ariaLabel="download"
          buttonPressed={buttonPressed}
          isLoading={isLoading}
        />
        <div className="flex w-24 justify-between">
          <ColorPickerIcon
            color={firstColor.hex}
            picker={"first"}
            toggle={toggleColorPicker}
            isDisabled={isDisabled}
            ariaLabel="First Color"
          />
          <ColorPickerIcon
            color={secondColor.hex}
            picker={"second"}
            toggle={toggleColorPicker}
            isDisabled={isDisabled}
            ariaLabel="Second Color"
          />
        </div>
        <ButtonIcon
          onClick={() => handleClick("reload", onReload)}
          isDisabled={isLoading}
          Icon={FiRefreshCw}
          ariaLabel="reload"
          buttonPressed={buttonPressed}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default ImageCard;
