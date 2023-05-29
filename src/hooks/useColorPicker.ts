import { useState, useCallback, useMemo } from "react";
import { useColor } from "react-color-palette";

interface ColorPickerProps {
  initialFirstColor: string;
  initialSecondColor: string;
}

const useColorPicker = ({
  initialFirstColor,
  initialSecondColor,
}: ColorPickerProps) => {
  const [firstColorHex, setFirstColorHex] = useState(initialFirstColor);
  const [secondColorHex, setSecondColorHex] = useState(initialSecondColor);
  const [firstColor, setFirstColor] = useColor("hex", firstColorHex);
  const [secondColor, setSecondColor] = useColor("hex", secondColorHex);
  const [showColorPicker, setShowColorPicker] = useState({
    first: false,
    second: false,
  });

  const toggleColorPicker = useCallback((picker: "first" | "second") => {
    setShowColorPicker((prevState) => ({
      first: picker === "first" ? !prevState.first : false,
      second: picker === "second" ? !prevState.second : false,
    }));
  }, []);

  return useMemo(
    () => ({
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
      toggleColorPicker,
    }),
    [
      firstColorHex,
      secondColorHex,
      firstColor,
      setFirstColor,
      secondColor,
      setSecondColor,
      showColorPicker,
      toggleColorPicker,
    ]
  );
};

export default useColorPicker;
