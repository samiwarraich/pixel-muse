"use client";
import { useState } from "react";
import Image from "next/image";
import { FiDownload, FiRefreshCw } from "react-icons/fi";
import { getPhoto } from "@/services";

export default function ImageItem({ imageUrl }: { imageUrl: string }) {
  const [imgUrl, setImgUrl] = useState(imageUrl);

  const onReload = async () => {
    const res = await getPhoto();
    console.log({ res });
    if ("error" in res) return console.error(res.error);
    setImgUrl(res.url);
  };

  const onDownload = () => {
    downloadImage(imgUrl);
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
        <Image src={imgUrl} alt={""} layout="fill" objectFit="cover" priority />
      </div>
      <div className="px-6 py-4 flex justify-between">
        <FiDownload
          onClick={onDownload}
          size={24}
          className="transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 focus:outline-none cursor-pointer"
        />
        <FiRefreshCw
          onClick={onReload}
          size={24}
          className="transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 focus:outline-none cursor-pointer"
        />
      </div>
    </div>
  );
}
