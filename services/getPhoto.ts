import { IPhoto, IError } from "@/types";
import { fetchData } from "@/utils/fetchData";

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
  const url = isClient ? process.env.NEXT_PUBLIC_BOT_URL : process.env.BOT_URL;
  const hash = isClient
    ? process.env.NEXT_PUBLIC_WEB_HASH
    : process.env.WEB_HASH;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (hash) {
    headers["web-hash"] = hash;
  }

  const res = await fetchData({
    url: url as string,
    options: {
      method: "POST",
      headers,
      next: {
        revalidate: 1,
      },
      body: JSON.stringify({ isClient, newColors, randValue }),
    },
  });

  if ("error" in res) {
    return res;
  }

  const { image, colors, rand } = await res.json();
  return { image, colors, rand };
};
