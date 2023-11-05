import { memo } from "react";
import { IColor, ColorPicker as RColorPicker } from "react-color-palette";

interface ColorPickerProps {
  show: boolean;
  color: any;
  setColor: (color: IColor) => void;
}

const ColorPicker = ({ show, color, setColor }: ColorPickerProps) => {
  if (!show) return null;

  return (
    <RColorPicker
      height={190}
      color={color}
      onChange={setColor}
      hideAlpha
      hideInput={["hsv", "rgb"]}
    />
  );
};

export default memo(ColorPicker);
