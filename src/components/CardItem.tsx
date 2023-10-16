import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { IBot } from "@/types";

function CardItem({
  title,
  username,
  url,
  description,
  image,
  imageAlt,
  ariaLabel,
}: IBot) {
  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.03] focus-within:shadow-lg focus-within:scale-[1.03] cursor-pointer backdrop-brightness-150"
      aria-label={ariaLabel}
    >
      <Link target="_blank" href={url}>
        <div className="relative h-52 w-full">
          <Image src={image} alt={imageAlt} layout="fill" objectFit="cover" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="font-medium text-sm mb-2">{username}</div>
          <p className="text-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default memo(CardItem);
