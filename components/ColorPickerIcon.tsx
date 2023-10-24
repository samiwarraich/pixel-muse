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
      title={color}
      className={`w-7 h-7 rounded-full border-2 border-custom-border mx-[6px] ${
        isDisabled
          ? "opacity-50"
          : "transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.15] focus-within:shadow-lg focus-within:scale-[1.15] focus:outline-none"
      }`}
      style={{
        backgroundColor: color,
        cursor: isDisabled ? "default" : "pointer",
      }}
      onClick={() => !isDisabled && toggle(pickerIndex)}
      aria-label={ariaLabel}
      role="button"
    />
  );
}

export default memo(ColorPickerIcon);
