import { memo } from "react";
import { ErrorMsg, Loader, ColorPicker, Image } from "@/components";
import { IPhoto, IError } from "@/types";
import { isPhoto } from "@/utils";
import { Color } from "react-color-palette";

interface ImageDisplayProps {
  isLoading: boolean;
  error: string;
  photo: IPhoto | IError;
  showColorPickers: boolean[];
  colors: Color[];
  imageCardRef: React.RefObject<HTMLDivElement>;
  setColors: (value: React.SetStateAction<Color[]>) => void;
  imgUrl: string;
}

const ImageDisplay = ({
  isLoading,
  error,
  photo,
  showColorPickers,
  colors,
  imageCardRef,
  setColors,
  imgUrl,
}: ImageDisplayProps) => {
  if (isLoading) return <Loader height={"70%"} width={"70%"} />;
  if (error || !isPhoto(photo))
    return <ErrorMsg name="image" message={error || (photo as IError).error} />;

  if (showColorPickers.some((showColorPicker) => showColorPicker)) {
    return colors.map((color, index) =>
      showColorPickers[index] ? (
        <ColorPicker
          key={index}
          width={imageCardRef?.current?.offsetWidth || 0}
          show={showColorPickers[index]}
          color={color}
          setColor={(newColor) =>
            setColors((prevColors) =>
              prevColors.map((prevColor, i) =>
                i === index ? newColor : prevColor
              )
            )
          }
        />
      ) : null
    );
  }

  return (
    <Image
      src={imgUrl}
      alt={`A random pixel image with colors: ${colors
        .map((color) => color.hex)
        .join(", ")}`}
    />
  );
};

export default memo(ImageDisplay);
