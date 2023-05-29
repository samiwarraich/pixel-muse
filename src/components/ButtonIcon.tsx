import { memo } from "react";

interface ButtonProps {
  onClick: () => void;
  isDisabled: boolean;
  Icon: React.ElementType;
}

const ButtonIcon = ({ onClick, isDisabled, Icon }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={
        isDisabled
          ? "opacity-50"
          : "transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 focus:outline-none cursor-pointer"
      }
    >
      <Icon size={24} />
    </button>
  );
};

export default memo(ButtonIcon);
