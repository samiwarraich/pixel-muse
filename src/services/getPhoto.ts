import { Photo, ErrorData } from "@/types";

interface GetPhotoProps {
  isClient?: boolean;
  colorOne?: { r: number; g: number; b: number };
  colorTwo?: { r: number; g: number; b: number };
}

export async function getPhoto({
  isClient,
  colorOne,
  colorTwo,
}: GetPhotoProps): Promise<Photo | ErrorData> {
  const url = isClient ? process.env.NEXT_PUBLIC_BOT_URL : process.env.BOT_URL;
  const hash = isClient
    ? process.env.NEXT_PUBLIC_WEB_HASH
    : process.env.WEB_HASH;

  const data = { isClient, colorOne, colorTwo };
  try {
    const res = await fetch(url as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "web-hash": hash as string,
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
