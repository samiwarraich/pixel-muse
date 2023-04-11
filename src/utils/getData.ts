import { IEdgeConfig, Error } from "@/types";

export async function getData(): Promise<IEdgeConfig | Error> {
  try {
    const res = await fetch(process.env.EDGE_CONFIG as string, {
      next: {
        revalidate: 1,
      },
    });
    const json = await res.json();
    const { header, bots, footer } = json.items;
    return { header, bots, footer };
  } catch (error) {
    console.error(error);
    return { error: "Some thing went wrong!🙁" };
  }
}
