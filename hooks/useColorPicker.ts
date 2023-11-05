import { useState, useCallback, useMemo } from "react";
import { IColor } from "react-color-palette";

interface ColorPickerProps {
  initialColors: IColor[];
}

const useColorPicker = ({ initialColors }: ColorPickerProps) => {
  const [colorsHex, setColorsHex] = useState<IColor[]>(initialColors);
  const [colors, setColors] = useState<IColor[]>(colorsHex);
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
