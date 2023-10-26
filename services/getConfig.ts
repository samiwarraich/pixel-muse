import { IConfig, IError } from "@/types";
import { fetchData } from "@/utils/fetchData";

export const getConfig = async (): Promise<IConfig | IError> => {
  const res = await fetchData({ url: process.env.EDGE_CONFIG as string });

  if ("error" in res) {
    return res;
  }

  const { items } = await res.json();
  if (!items?.bots?.length) return { error: "Something went wrong! 🙁" };
  return items;
};
