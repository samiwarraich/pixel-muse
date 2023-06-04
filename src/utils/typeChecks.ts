import { Photo, Config, ErrorData } from "@/types";

export const isPhoto = (photo: Photo | ErrorData): photo is Photo => {
  if (!photo) return false;
  return (
    (photo as Photo).image !== undefined &&
    (photo as Photo).firstColor !== undefined &&
    (photo as Photo).secondColor !== undefined &&
    (photo as Photo).rand !== undefined
  );
};

export const isConfig = (config: Config | ErrorData): config is Config => {
  if (!config) return false;
  return (
    "bots" in config && Array.isArray(config.bots) && config.bots.length > 0
  );
};
