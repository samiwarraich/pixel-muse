"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { FiDownload, FiRefreshCw } from "react-icons/fi";
import { useDownloadImage } from "@/hooks";
import { ErrorMsg, Loader, ColorPickerIcon } from "@/components";
import { getPhoto } from "@/services";
import { IError, IPhoto } from "@/types";
import { ColorPicker, useColor, toColor } from "react-color-palette";

interface ImageItemProps {
  photo: IPhoto | IError;
}

const ImageItem = ({ photo }: ImageItemProps) => {
  const imageCardRef = useRef<HTMLDivElement>(null);
  const [imgUrl, setImgUrl] = useState(
    "image" in photo && photo.image ? photo.image : ""
  );
  const [colorOne, setColorOne] = useState(
    "firstColor" in photo && photo.firstColor ? photo.firstColor : ""
  );
  const [colorTwo, setColorTwo] = useState(
    "secondColor" in photo && photo.secondColor ? photo.secondColor : ""
  );
  const [error, setError] = useState("error" in photo ? photo.error : "");
  const [isLoading, setIsLoading] = useState(false);
  const { downloadImage } = useDownloadImage();
  const [firstColor, setFirstColor] = useColor("hex", colorOne);
  const [secondColor, setSecondColor] = useColor("hex", colorTwo);
  const [showColorPicker, setShowColorPicker] = useState({
    show: false,
    picker: 0,
  });

  const onToggleColorPicker = (picker: number) => {
    if (showColorPicker.show && showColorPicker.picker !== picker) {
      setShowColorPicker({ show: true, picker });
    } else {
      setShowColorPicker({ show: !showColorPicker.show, picker });
    }
  };

  const onDownload = () => {
    downloadImage(imgUrl);
  };

  const onReload = async () => {
    setIsLoading(true);
    setShowColorPicker({ ...showColorPicker, show: false });
    if (firstColor.hex !== colorOne || secondColor.hex !== colorTwo) {
      console.log("different color");
      const photo = await getPhoto(true, firstColor.rgb, secondColor.rgb);
      if ("image" in photo && "firstColor" in photo && "secondColor" in photo) {
        photo.image && setImgUrl(photo.image);
        photo.firstColor && setColorOne(photo.firstColor);
        photo.secondColor && setColorTwo(photo.secondColor);
        photo.firstColor && setFirstColor(toColor("hex", photo.firstColor));
        photo.secondColor && setSecondColor(toColor("hex", photo.secondColor));
        setError("");
      } else {
        setError(photo.error);
      }
    } else {
      const photo = await getPhoto(true);
      if ("image" in photo && "firstColor" in photo && "secondColor" in photo) {
        photo.image && setImgUrl(photo.image);
        photo.firstColor && setColorOne(photo.firstColor);
        photo.secondColor && setColorTwo(photo.secondColor);
        photo.firstColor && setFirstColor(toColor("hex", photo.firstColor));
        photo.secondColor && setSecondColor(toColor("hex", photo.secondColor));
        setError("");
      } else {
        setError(photo.error);
      }
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
        ) : showColorPicker?.show ? (
          <>
            {showColorPicker?.picker === 1 ? (
              <ColorPicker
                width={
                  imageCardRef?.current ? imageCardRef?.current?.offsetWidth : 0
                }
                height={200}
                color={firstColor}
                onChange={setFirstColor}
                hideHSV
                hideRGB
                dark
              />
            ) : showColorPicker?.picker === 2 ? (
              <ColorPicker
                width={
                  imageCardRef?.current ? imageCardRef?.current?.offsetWidth : 0
                }
                height={200}
                color={secondColor}
                onChange={setSecondColor}
                hideHSV
                hideRGB
                dark
              />
            ) : null}
          </>
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
        <button
          onClick={onDownload}
          disabled={isDisabled}
          className={
            isDisabled
              ? "opacity-50"
              : "transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 focus:outline-none cursor-pointer"
          }
        >
          <FiDownload size={24} />
        </button>
        <div className="flex w-24 justify-between">
          <ColorPickerIcon
            color={firstColor.hex}
            picker={1}
            toggle={onToggleColorPicker}
          />
          <ColorPickerIcon
            color={secondColor.hex}
            picker={2}
            toggle={onToggleColorPicker}
          />
        </div>
        <button
          onClick={onReload}
          disabled={isLoading}
          className={
            isLoading
              ? "opacity-50"
              : "transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 focus:outline-none cursor-pointer"
          }
        >
          <FiRefreshCw size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageItem;
