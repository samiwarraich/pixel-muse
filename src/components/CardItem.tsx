import Image from "next/image";
import Link from "next/link";
import { IBots } from "@/types";

export default function CardItem({
  title,
  username,
  url,
  image,
  description,
}: IBots) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-1 border-line">
      <Link target="_blank" href={url}>
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={description}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="text-sm mb-2">{username}</div>
          <p className="text-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
}
