import { memo } from "react";
import { ErrorMsg, Loader, ColorPicker, Image } from "@/components";
import { IPhoto, IError } from "@/types";
import { isPhoto } from "@/utils";
import { IColor } from "react-color-palette";

interface ImageDisplayProps {
  isLoading: boolean;
  error: string;
  photo: IPhoto | IError;
  showColorPickers: boolean[];
  colors: IColor[];
  setColors: (value: React.SetStateAction<IColor[]>) => void;
  imgUrl: string;
}

const ImageDisplay = ({
  isLoading,
  error,
  photo,
  showColorPickers,
  colors,
  setColors,
  imgUrl,
}: ImageDisplayProps) => {
  if (isLoading) return <Loader height={"70%"} width={"70%"} />;
  if (error || !isPhoto(photo))
    return <ErrorMsg type="image" message={error || (photo as IError).error} />;

  if (showColorPickers.some((showColorPicker) => showColorPicker)) {
    return colors.map((color, index) =>
      showColorPickers[index] ? (
        <ColorPicker
          key={index}
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
