import { IPhoto, IError } from "@/types";

export async function getPhoto(isClient?: Boolean): Promise<IPhoto | IError> {
  const url: string = isClient
    ? (process.env.NEXT_PUBLIC_BOT_URL as string)
    : (process.env.BOT_URL as string);
  const hash: string = isClient
    ? (process.env.NEXT_PUBLIC_WEB_HASH as string)
    : (process.env.WEB_HASH as string);
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "web-hash": hash,
      },
      next: {
        revalidate: 1,
      },
    });
    const { image, firstColor, secondColor } = await res.json();
    return { image, firstColor, secondColor };
  } catch (error) {
    console.error(error);
    return { error: "Some thing went wrong! 🙁" };
  }
}
