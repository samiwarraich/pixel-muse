import { memo } from "react";

interface ButtonProps {
  onClick: () => void;
  isDisabled: boolean;
  Icon: React.ElementType;
  ariaLabel?: string;
  buttonPressed: string;
  isLoading: boolean;
}

const ButtonIcon = ({
  onClick,
  isDisabled,
  Icon,
  ariaLabel,
  buttonPressed,
  isLoading,
}: ButtonProps) => {
  return (
    <button
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
          : "cursor-pointer"
      }
    >
      <Icon size={24} />
    </button>
  );
};

export default memo(ButtonIcon);
