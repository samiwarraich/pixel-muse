import { memo } from "react";
import { Link, Image } from "@/components";
import { IBot } from "@/types";

const CardItem = ({
  title,
  username,
  url,
  description,
  image,
  imageAlt,
  ariaLabel,
}: IBot) => {
  return (
    <div
      className="w-full max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.03] focus-within:shadow-lg focus-within:scale-[1.03] cursor-pointer backdrop-brightness-125 border border-default"
      aria-label={ariaLabel}
    >
      <Link target="_blank" href={url} className="focus:outline-none">
        <div className="relative h-52 w-full">
          <Image src={image} alt={imageAlt} />
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
