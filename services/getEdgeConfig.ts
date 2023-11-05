import { fetchData, config } from "@/utils";
import { IEdgeConfig, IError } from "@/types";

export const getEdgeConfig = async (): Promise<IEdgeConfig | IError> => {
  const { EDGE_CONFIG } = config;
  const res = await fetchData({ url: EDGE_CONFIG });

  if ("error" in res) return res;

  const { items } = await res.json();
  if (!items?.bots?.length) return { error: "Something went wrong! 🙁" };
  return items;
};
