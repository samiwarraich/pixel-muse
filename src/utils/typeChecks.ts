import { IPhoto, IConfig, IError } from "@/types";

export const isPhoto = (photo: IPhoto | IError): photo is IPhoto => {
  if (!photo) return false;
  return (
    (photo as IPhoto).image !== undefined &&
    "colors" in photo &&
    Array.isArray(photo.colors) &&
    photo.colors.length > 0 &&
    (photo as IPhoto).rand !== undefined
  );
};

export const isConfig = (config: IConfig | IError): config is IConfig => {
  if (!config) return false;
  return (
    "bots" in config && Array.isArray(config.bots) && config.bots.length > 0
  );
};
