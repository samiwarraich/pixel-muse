import { getRandomImage, getRandomShape } from "@/utils";

export async function getImage() {
  const { shape, name } = getRandomShape();
  const { image, topColor, bottomColor } = getRandomImage(shape);
  return { name, image, topColor, bottomColor };
}
