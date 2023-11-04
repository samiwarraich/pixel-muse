import { IPhoto, IError } from "@/types";
import { fetchData, config } from "@/utils";

interface GetPhotoProps {
  isClient?: boolean;
  newColors?: { r: number; g: number; b: number }[];
  randValue?: number;
}

export const getPhoto = async ({
  isClient,
  newColors,
  randValue,
}: GetPhotoProps): Promise<IPhoto | IError> => {
  const { BOT_URL, WEB_HASH } = config;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "web-hash": WEB_HASH,
  };

  const options = {
    method: "POST",
    headers,
    next: {
      revalidate: 1,
    },
    body: JSON.stringify({ isClient, newColors, randValue }),
  };

  const res = await fetchData({ url: BOT_URL, options });

  if ("error" in res) return res;

  const { image, colors, rand } = await res.json();
  return { image, colors, rand };
};
