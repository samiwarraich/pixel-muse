import { Photo, Error } from "@/types";

export async function getPhoto(
  isClient?: Boolean,
  colorOne?: { r: number; g: number; b: number },
  colorTwo?: { r: number; g: number; b: number }
): Promise<Photo | Error> {
  const url: string = isClient
    ? (process.env.NEXT_PUBLIC_BOT_URL as string)
    : (process.env.BOT_URL as string);
  const hash: string = isClient
    ? (process.env.NEXT_PUBLIC_WEB_HASH as string)
    : (process.env.WEB_HASH as string);

  const data = { isClient, colorOne, colorTwo };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "web-hash": hash,
      },
      next: {
        revalidate: 1,
      },
      body: JSON.stringify(data),
    });
    const { image, firstColor, secondColor } = await res.json();
    return {
      image,
      firstColor,
      secondColor,
    };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong! 🙁" };
  }
}
