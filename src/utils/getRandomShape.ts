import * as shapes from "./shapes";

export const getRandomShape = () => {
  const shapeNames = Object.keys(shapes);
  const randomIndex = Math.floor(Math.random() * shapeNames.length);
  const randomShapeName = shapeNames[randomIndex];
  return {
    shape: shapes[randomShapeName as keyof typeof shapes],
    name: randomShapeName,
  };
};
