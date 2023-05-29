import { Photo, Config, ErrorData } from "@/types";

export const isPhoto = (photo: Photo | ErrorData): photo is Photo => {
  return (
    (photo as Photo).image !== undefined &&
    (photo as Photo).firstColor !== undefined &&
    (photo as Photo).secondColor !== undefined
  );
};

export const isConfig = (config: Config | ErrorData): config is Config => {
  return (
    "bots" in config && Array.isArray(config.bots) && config.bots.length > 0
  );
};
