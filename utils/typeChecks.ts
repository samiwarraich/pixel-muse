import { IPhoto, IEdgeConfig, IError } from "@/types";

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

export const isEdgeConfig = (
  edgeConfig: IEdgeConfig | IError
): edgeConfig is IEdgeConfig => {
  if (!edgeConfig) return false;
  return (
    "bots" in edgeConfig &&
    Array.isArray(edgeConfig.bots) &&
    edgeConfig.bots.length > 0
  );
};
