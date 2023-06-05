import { memo } from "react";

interface ColorPickerIconProps {
  color: string;
  picker: "first" | "second";
  toggle: (picker: "first" | "second") => void;
  isDisabled: boolean;
  ariaLabel: string;
}

const ColorPickerIcon = ({
  color,
  picker,
  toggle,
  isDisabled,
  ariaLabel,
}: ColorPickerIconProps) => {
  return (
    <div
      className={`w-7 h-7 rounded-full border-2 border-custom-gray ${
        isDisabled
          ? "opacity-50"
          : "transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 focus:outline-none cursor-pointer"
      }`}
      style={{
        backgroundColor: color,
      }}
      onClick={() => toggle(picker)}
      aria-label={ariaLabel}
    />
  );
};

export default memo(ColorPickerIcon);
