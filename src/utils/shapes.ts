const diamond = (WIDTH: number, HEIGHT: number, x: number, y: number) => {
  const distanceToCenterX = Math.abs(x - WIDTH / 2);
  const distanceToCenterY = Math.abs(y - HEIGHT / 2);
  return (distanceToCenterX + distanceToCenterY) / (WIDTH / 2 + HEIGHT / 2);
};

const circle = (WIDTH: number, HEIGHT: number, x: number, y: number) => {
  const distanceToCenter = Math.sqrt(
    Math.pow(x - WIDTH / 2, 2) + Math.pow(y - HEIGHT / 2, 2)
  );
  const maxDistance = Math.sqrt(
    Math.pow(WIDTH / 2, 2) + Math.pow(HEIGHT / 2, 2)
  );
  return distanceToCenter / maxDistance;
};

const horizontal = (WIDTH: number, HEIGHT: number, x: number, y: number) => {
  return y / HEIGHT;
};

const vertical = (WIDTH: number, HEIGHT: number, x: number, y: number) => {
  return x / WIDTH;
};

const square = (WIDTH: number, HEIGHT: number, x: number, y: number) => {
  const distanceToCenterX = Math.abs(x - WIDTH / 2);
  const distanceToCenterY = Math.abs(y - HEIGHT / 2);
  return (
    Math.max(distanceToCenterX, distanceToCenterY) /
    (Math.max(WIDTH, HEIGHT) / 2)
  );
};

const triangle = (WIDTH: number, HEIGHT: number, x: number, y: number) => {
  const distanceToCenterX = Math.abs(x - WIDTH / 2);
  return (distanceToCenterX + y) / (WIDTH / 2 + HEIGHT);
};

const cross = (WIDTH: number, HEIGHT: number, x: number, y: number) => {
  const distanceToCenterX = Math.abs(x - WIDTH / 2);
  const distanceToCenterY = Math.abs(y - HEIGHT / 2);
  return (
    Math.min(distanceToCenterX, distanceToCenterY) /
    (Math.min(WIDTH, HEIGHT) / 2)
  );
};

const spiral = (WIDTH: number, HEIGHT: number, x: number, y: number) => {
  const distanceToCenterX = Math.abs(x - WIDTH / 2);
  const distanceToCenterY = Math.abs(y - HEIGHT / 2);
  const angle = Math.atan2(distanceToCenterY, distanceToCenterX);
  const factor = Math.sin(angle * 10) * 0.5 + 0.5;
  return (
    ((distanceToCenterX + distanceToCenterY) / (WIDTH / 2 + HEIGHT / 2)) *
    factor
  );
};

const wave = (WIDTH: number, HEIGHT: number, x: number, y: number) => {
  const angle = (x / WIDTH) * Math.PI * 1;
  const factor = Math.sin(angle) * 0.5 + 0.5;
  return (y / HEIGHT) * factor;
};

const hexagon = (WIDTH: number, HEIGHT: number, x: number, y: number) => {
  const distanceToCenterX = Math.abs(x - WIDTH / 2);
  const distanceToCenterY = Math.abs(y - HEIGHT / 2);
  const angle = Math.atan2(distanceToCenterY, distanceToCenterX);
  const factor = Math.cos(6 * angle) * 0.5 + 0.5;
  return (
    ((distanceToCenterX + distanceToCenterY) / (WIDTH / 2 + HEIGHT / 2)) *
    factor
  );
};

const diagonal = (WIDTH: number, HEIGHT: number, x: number, y: number) => {
  return (x + y) / (WIDTH + HEIGHT);
};

export {
  diamond,
  circle,
  horizontal,
  vertical,
  square,
  triangle,
  cross,
  spiral,
  wave,
  hexagon,
  diagonal,
};
