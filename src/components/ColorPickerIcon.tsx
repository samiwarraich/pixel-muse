interface ColorPickerIconProps {
  color: string;
  picker: number;
  toggle: (picker: number) => void;
  isDisabled: boolean;
}

const ColorPickerIcon = ({
  color,
  picker,
  toggle,
  isDisabled,
}: ColorPickerIconProps) => {
  return (
    <div
      className={
        isDisabled
          ? ""
          : "w-7 h-7 rounded-full border-2 border-custom transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 focus:outline-none cursor-pointer"
      }
      style={{
        backgroundColor: color,
      }}
      onClick={() => toggle(picker)}
    />
  );
};

export default ColorPickerIcon;
