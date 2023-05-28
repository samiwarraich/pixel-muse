"use client";
import { ColorPicker as RColorPicker } from "react-color-palette";

interface ColorPickerProps {
  show: boolean;
  color: any;
  setColor: (color: any) => void;
  width: number;
}

const ColorPicker = ({ show, color, setColor, width }: ColorPickerProps) => {
  if (!show) return null;

  return (
    <RColorPicker
      width={width}
      height={200}
      color={color}
      onChange={setColor}
      hideHSV
      hideRGB
      dark
    />
  );
};

export default ColorPicker;
