import { memo } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends Omit<NextImageProps, "alt"> {
  src: string;
  alt?: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

const Image = ({
  src,
  alt = "",
  className = "object-cover pointer-events-none select-none",
  fill = true,
  priority = true,
  ...props
}: ImageProps) => {
  return (
    <NextImage
      className={className}
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      {...props}
    />
  );
};

export default memo(Image);
