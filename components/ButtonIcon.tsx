import { memo } from "react";

interface ButtonProps {
  onClick: () => void;
  isDisabled: boolean;
  Icon: React.ElementType;
  ariaLabel: string;
  buttonPressed: string;
  isLoading: boolean;
}

function ButtonIcon({
  onClick,
  isDisabled,
  Icon,
  ariaLabel,
  buttonPressed,
  isLoading,
}: ButtonProps) {
  return (
    <button
      title={`${ariaLabel[0].toUpperCase()}${ariaLabel.slice(1)}`}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      className={
        isLoading
          ? `opacity-50 ${
              ariaLabel === "reload" && ariaLabel === buttonPressed
                ? "animate-spin"
                : ariaLabel === "download" && ariaLabel === buttonPressed
                ? "animate-ping"
                : ""
            }`
          : isDisabled
          ? ` opacity-50 `
          : "transition-all duration-200 hover:scale-[1.15] focus-within:shadow-lg focus-within:scale-[1.15] focus:outline-none"
      }
    >
      <Icon size={24} />
    </button>
  );
}

export default memo(ButtonIcon);
