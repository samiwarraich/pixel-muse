import { useState } from "react";
import { useColor } from "react-color-palette";

interface UseColorPickerProps {
  initialFirstColorHex: string;
  initialSecondColorHex: string;
}

const useColorPicker = ({
  initialFirstColorHex,
  initialSecondColorHex,
}: UseColorPickerProps) => {
  const [firstColorHex, setFirstColorHex] = useState(initialFirstColorHex);
  const [secondColorHex, setSecondColorHex] = useState(initialSecondColorHex);
  const [firstColor, setFirstColor] = useColor("hex", firstColorHex);
  const [secondColor, setSecondColor] = useColor("hex", secondColorHex);
  const [showColorPicker, setShowColorPicker] = useState({
    first: false,
    second: false,
  });

  const onToggleColorPicker = (picker: "first" | "second") => {
    setShowColorPicker((prevState) => ({
      first: picker === "first" ? !prevState.first : false,
      second: picker === "second" ? !prevState.second : false,
    }));
  };

  return {
    firstColorHex,
    setFirstColorHex,
    secondColorHex,
    setSecondColorHex,
    firstColor,
    setFirstColor,
    secondColor,
    setSecondColor,
    showColorPicker,
    setShowColorPicker,
    onToggleColorPicker,
  };
};

export default useColorPicker;
