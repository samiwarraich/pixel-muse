// Generate random RGB values for the gradient
export const getRandomRGBColors = () => {
  const r1 = Math.floor(Math.random() * 256);
  const g1 = Math.floor(Math.random() * 256);
  const b1 = Math.floor(Math.random() * 256);
  const r2 = Math.floor(Math.random() * 256);
  const g2 = Math.floor(Math.random() * 256);
  const b2 = Math.floor(Math.random() * 256);
  return [
    { r: r1, g: g1, b: b1 },
    { r: r2, g: g2, b: b2 },
  ];
};
