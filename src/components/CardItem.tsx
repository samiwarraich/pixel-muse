import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bot } from "@/types";
import { Loader } from "@/components";

const CardItem = ({
  title,
  username,
  url,
  image,
  alt,
  description,
  type,
}: Bot) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-[1px] border-dashed border-[#9ba4b5] transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 cursor-pointer backdrop-brightness-125">
      <Link target="_blank" href={url}>
        <div className="relative h-52 w-full">
          {image ? (
            <Image
              src={image}
              alt={alt}
              layout="fill"
              objectFit="cover"
              priority
            />
          ) : (
            <Loader height={"60%"} width={"60%"} />
          )}
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="font-medium text-sm mb-2">{username}</div>
          <p className="text-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default memo(CardItem);
