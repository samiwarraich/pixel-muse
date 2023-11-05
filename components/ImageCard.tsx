"use client";
import { useState } from "react";
import { ImageDisplay, ImageActionPanel } from "@/components";
import { usePhoto } from "@/hooks";
import { IError, IPhoto } from "@/types";
import { setClarity } from "@/utils";

interface ImageCardProps {
  photo: IPhoto | IError;
}

const ImageCard = ({ photo }: ImageCardProps) => {
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
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg backdrop-brightness-125 border border-custom-card-border">
      <div className="relative h-80 w-full">
        <ImageDisplay
          isLoading={isLoading}
          error={error}
          photo={photo}
          showColorPickers={showColorPickers}
          colors={colors}
          setColors={setColors}
          imgUrl={imgUrl}
        />
      </div>
      <div className="px-5 py-3 flex justify-between">
        <ImageActionPanel
          handleClick={handleClick}
          onDownload={onDownload}
          isDisabled={isDisabled}
          buttonPressed={buttonPressed}
          isLoading={isLoading}
          colors={colors}
          toggleColorPicker={toggleColorPicker}
          onReload={onReload}
        />
      </div>
    </div>
  );
};

export default ImageCard;
