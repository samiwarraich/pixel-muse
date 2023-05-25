"use client";
import { useState } from "react";
import Image from "next/image";
import { FiDownload, FiRefreshCw } from "react-icons/fi";
import { useDownloadImage } from "@/hooks";
import { ErrorMsg, Loader } from "@/components";
import { getPhoto } from "@/services";
import { IError, IPhoto } from "@/types";

export default function ImageItem({ photo }: { photo: IPhoto | IError }) {
  const [imgUrl, setImgUrl] = useState("image" in photo ? photo.image : "");
  const [error, setError] = useState("error" in photo ? photo.error : "");
  const [isLoading, setIsLoading] = useState(false);
  const { downloadImage } = useDownloadImage();

  const onDownload = () => {
    downloadImage(imgUrl);
  };

  const onReload = async () => {
    setIsLoading(true);
    const photo = await getPhoto(true);
    if ("image" in photo) {
      setImgUrl(photo.image);
      setError("");
    } else {
      setError(photo.error);
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-1 border-line  backdrop-brightness-125">
      <div className="relative h-80 w-full">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorMsg name="image" message={error} />
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
          disabled={error || isLoading ? true : false}
          className={
            error || isLoading
              ? "opacity-50"
              : "transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 focus:outline-none cursor-pointer"
          }
        >
          <FiDownload size={24} />
        </button>
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
}
