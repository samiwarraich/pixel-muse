"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getRandomImage, getRandomShape } from "@/utils";
import { IRandomImage } from "@/types";

export default function ImageCard({
  randomImage,
}: {
  randomImage: IRandomImage;
}) {
  const [{ name, image, topColor, bottomColor }, setData] = useState({
    name: randomImage.name,
    image: randomImage.image,
    topColor: randomImage.topColor,
    bottomColor: randomImage.bottomColor,
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      const { shape, name } = getRandomShape();
      const { image, topColor, bottomColor } = getRandomImage(shape);
      setData({ name, image, topColor, bottomColor });
    }, 60 * 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-1 border-line">
      <div className="relative h-72 w-full">
        <Image
          src={`data:image/png;base64,${image}`}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-6 py-4">
        {/* <div className="font-bold text-xl mb-2">{`${name[0].toUpperCase()}${name.slice(
          1
        )}`}</div> */}
        <div className="text-base mb-2">{`Colors: ${topColor}, ${bottomColor}`}</div>
      </div>
    </div>
  );
}
