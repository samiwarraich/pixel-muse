import Image from "next/image";
import Link from "next/link";
import { IBot } from "@/types";

export default function CardItem({
  title,
  username,
  url,
  image,
  alt,
  description,
}: IBot) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-1 border-line transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1">
      <Link target="_blank" href={url}>
        <div className="relative h-52 w-full">
          <Image
            src={image}
            alt={alt}
            layout="fill"
            objectFit="cover"
            priority
          />
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
