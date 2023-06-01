import { Config, ErrorData } from "@/types";

export async function getConfig(): Promise<Config | ErrorData> {
  try {
    const res = await fetch(process.env.EDGE_CONFIG as string, {
      next: {
        revalidate: 1,
      },
    });
    if (!res.ok) return { error: "Something went wrong! 🙁" };
    const { items } = await res.json();
    if (!items?.bots?.length) throw new Error("Something went wrong! 🙁");
    return items;
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong! 🙁" };
  }
}
