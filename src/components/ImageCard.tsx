"use client";
import { useState } from "react";
import { IError, IPhoto } from "@/types";
import Image from "next/image";
import { FiDownload, FiRefreshCw } from "react-icons/fi";
import { getPhoto } from "@/services";

export default function ImageItem({ photo }: { photo: IPhoto | IError }) {
  const [imgUrl, setImgUrl] = useState("image" in photo ? photo.image : "");
  const [error, setError] = useState("error" in photo ? photo.error : "");
  const [isLoading, setIsLoading] = useState(false);

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

  async function downloadImage(imageUrl: any) {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = `pixel-muse-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-1 border-line ">
      <div className="relative h-80 w-full">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <p>Loading...</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-full">
            <p>{error}</p>
          </div>
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
        <FiDownload
          size={24}
          onClick={onDownload}
          className="transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 focus:outline-none cursor-pointer"
        />
        <FiRefreshCw
          size={24}
          onClick={onReload}
          className="transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 focus:outline-none cursor-pointer"
        />
      </div>
    </div>
  );
}
