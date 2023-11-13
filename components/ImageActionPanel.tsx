import { memo } from "react";
import { FiDownload, FiRefreshCw } from "react-icons/fi";
import { ButtonIcon, ColorPickerIcon } from "@/components";
import { IColor } from "react-color-palette";

interface ImageActionPanelProps {
  handleClick: (clickOn: string, callback: () => void) => void;
  onDownload: () => void;
  isDisabled: boolean;
  buttonPressed: string;
  isLoading: boolean;
  colors: IColor[];
  toggleColorPicker: (index: number) => void;
  onReload: () => Promise<void>;
}

const ImageActionPanel = ({
  handleClick,
  onDownload,
  isDisabled,
  buttonPressed,
  isLoading,
  colors,
  toggleColorPicker,
  onReload,
}: ImageActionPanelProps) => {
  return (
    <>
      <ButtonIcon
        onClick={() => handleClick("download", onDownload)}
        isDisabled={isDisabled}
        Icon={FiDownload}
        ariaLabel="download"
        buttonPressed={buttonPressed}
        isLoading={isLoading}
      />
      <div className="flex justify-center items-center">
        {colors.map((color, index) => (
          <ColorPickerIcon
            key={color.hex}
            color={color.hex}
            pickerIndex={index}
            toggle={toggleColorPicker}
            isDisabled={isDisabled}
            ariaLabel={color.hex}
          />
        ))}
      </div>
      <ButtonIcon
        onClick={() => handleClick("reload", onReload)}
        isDisabled={isLoading}
        Icon={FiRefreshCw}
        ariaLabel="reload"
        buttonPressed={buttonPressed}
        isLoading={isLoading}
      />
    </>
  );
};

export default memo(ImageActionPanel);
