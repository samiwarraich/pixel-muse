import { IConfig, IError } from "@/types";

export async function getConfig(): Promise<IConfig | IError> {
  try {
    const res = await fetch(process.env.EDGE_CONFIG as string, {
      next: {
        revalidate: 1,
      },
    });
    const { items } = await res.json();
    if (!items?.bots?.length) throw new Error();
    return items;
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong! 🙁" };
  }
}
