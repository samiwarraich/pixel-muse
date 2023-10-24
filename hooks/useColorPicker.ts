import { useState, useCallback, useMemo } from "react";
import { Color } from "react-color-palette";

interface ColorPickerProps {
  initialColors: Color[];
}

const useColorPicker = ({ initialColors }: ColorPickerProps) => {
  const [colorsHex, setColorsHex] = useState<Color[]>(initialColors);
  const [colors, setColors] = useState<Color[]>(colorsHex);
  const [showColorPickers, setShowColorPickers] = useState<boolean[]>(
    initialColors.map(() => false)
  );

  const toggleColorPicker = useCallback((index: number) => {
    setShowColorPickers((prevState) =>
      prevState.map((showColorPicker, i) =>
        i === index ? !showColorPicker : false
      )
    );
  }, []);

  return useMemo(
    () => ({
      colorsHex,
      setColorsHex,
      colors,
      setColors,
      showColorPickers,
      setShowColorPickers,
      toggleColorPicker,
    }),
    [
      colorsHex,
      setColorsHex,
      colors,
      setColors,
      showColorPickers,
      setShowColorPickers,
      toggleColorPicker,
    ]
  );
};

export default useColorPicker;
