import { memo } from "react";

interface ColorPickerIconProps {
  color: string;
  pickerIndex: number;
  toggle: (index: number) => void;
  isDisabled: boolean;
  ariaLabel?: string;
}

function ColorPickerIcon({
  color,
  pickerIndex,
  toggle,
  isDisabled,
  ariaLabel,
}: ColorPickerIconProps) {
  return (
    <div
      className={`w-7 h-7 rounded-full border-2 border-foreground-color mx-[6px] ${
        isDisabled
          ? "opacity-50"
          : "transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 focus:outline-none cursor-pointer"
      }`}
      style={{
        backgroundColor: color,
      }}
      onClick={() => toggle(pickerIndex)}
      aria-label={ariaLabel}
    />
  );
}

export default memo(ColorPickerIcon);
