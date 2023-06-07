import { memo } from "react";

interface ButtonProps {
  onClick: () => void;
  isDisabled: boolean;
  Icon: React.ElementType;
  ariaLabel?: string;
  isRotate?: boolean;
}

const ButtonIcon = ({
  onClick,
  isDisabled,
  Icon,
  ariaLabel,
  isRotate,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      className={`${
        isDisabled
          ? `opacity-50 ${
              isRotate ? "rotate-180 transition-transform duration-1000" : ""
            }`
          : "transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 focus:outline-none cursor-pointer"
      }`}
    >
      <Icon size={24} />
    </button>
  );
};

export default memo(ButtonIcon);
