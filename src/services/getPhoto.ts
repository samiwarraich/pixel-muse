import { IPhoto, IError } from "@/types";

export async function getPhoto(): Promise<IPhoto | IError> {
  try {
    const res = await fetch(process.env.BOT_URL as string, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "web-hash": process.env.WEB_HASH as string,
      },
      next: {
        revalidate: 1,
      },
    });
    const { url, firstColor, secondColor } = await res.json();
    return { url, firstColor, secondColor };
  } catch (error) {
    console.error(error);
    return { error: "Some thing went wrong! 🙁" };
  }
}
