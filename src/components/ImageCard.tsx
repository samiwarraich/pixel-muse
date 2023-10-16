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
import { IError, IPhoto } from "@/types";
import { isPhoto, setClarity } from "@/utils";

interface ImageCardProps {
  photo: IPhoto | IError;
}

function ImageCard({ photo }: ImageCardProps) {
  const imageCardRef = useRef<HTMLDivElement>(null);
  const [buttonPressed, setButtonPressed] = useState("");
  const {
    imgUrl,
    isLoading,
    error,
    onDownload,
    onReload,
    colors,
    setColors,
    showColorPickers,
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
      className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg backdrop-brightness-150"
    >
      <div className="relative h-80 w-full">
        {isLoading ? (
          <Loader height={"70%"} width={"70%"} />
        ) : error || !isPhoto(photo) ? (
          <ErrorMsg name="image" message={error || (photo as IError).error} />
        ) : showColorPickers.some((showColorPicker) => showColorPicker) ? (
          colors.map((color, index) =>
            showColorPickers[index] ? (
              <ColorPicker
                key={index}
                width={imageCardRef?.current?.offsetWidth || 0}
                show={showColorPickers[index]}
                color={color}
                setColor={(newColor) =>
                  setColors((prevColors) =>
                    prevColors.map((prevColor, i) =>
                      i === index ? newColor : prevColor
                    )
                  )
                }
              />
            ) : null
          )
        ) : (
          <Image
            src={imgUrl}
            alt={`A random pixel image with colors: ${colors
              .map((color) => color.hex)
              .join(", ")}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        )}
      </div>
      <div className="px-5 py-3 flex justify-between">
        <ButtonIcon
          onClick={() => handleClick("download", onDownload)}
          isDisabled={isDisabled}
          Icon={FiDownload}
          ariaLabel="download"
          buttonPressed={buttonPressed}
          isLoading={isLoading}
        />
        <div className="flex justify-center items-center">
          {colors.map((color, index) => (
            <ColorPickerIcon
              key={index}
              color={color.hex}
              pickerIndex={index}
              toggle={toggleColorPicker}
              isDisabled={isDisabled}
              ariaLabel={color.hex}
            />
          ))}
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
}

export default ImageCard;
