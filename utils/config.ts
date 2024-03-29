interface IConfig {
  BASE_URL: string;
  VERCEL_URL: string;
  BOT_URL: string;
  WEB_HASH: string;
  EDGE_CONFIG: string;
  MS_CLARITY: string;
}

export const config: IConfig = {
  BASE_URL:
    process.env.NODE_ENV !== "development"
      ? (process.env.NEXT_PUBLIC_BASE_URL as string)
      : "http://localhost:3000",
  VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL as string,
  BOT_URL: process.env.NEXT_PUBLIC_BOT_URL as string,
  WEB_HASH: process.env.NEXT_PUBLIC_WEB_HASH as string,
  EDGE_CONFIG: process.env.EDGE_CONFIG as string,
  MS_CLARITY: process.env.NEXT_PUBLIC_MS_CLARITY as string,
};
