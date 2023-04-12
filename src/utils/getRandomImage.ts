import { Image } from "image-js";
import { getRandomRGBColors } from "./getRandomRGBColors";
import { rgbToHex } from "./rgbToHex";

export const getRandomImage = (randomShape: any) => {
  const [WIDTH, HEIGHT] = [1200, 1200];
  const [top, bottom] = getRandomRGBColors();

  // Create a blank image
  const image = new Image(WIDTH, HEIGHT);

  // Set the pixel data to create a gradient effect
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      const ratio = randomShape(WIDTH, HEIGHT, x, y);
      const r = Math.round(top.r + (bottom.r - top.r) * ratio);
      const g = Math.round(top.g + (bottom.g - top.g) * ratio);
      const b = Math.round(top.b + (bottom.b - top.b) * ratio);
      image.setPixelXY(x, y, [r, g, b]);
    }
  }

  const buf = image.toBuffer();
  const img = Buffer.from(buf).toString("base64");

  return {
    image: img,
    topColor: rgbToHex(top.r, top.g, top.b),
    bottomColor: rgbToHex(bottom.r, bottom.g, bottom.b),
  };
};
