import { Photo, ErrorData } from "@/types";

export const isPhoto = (photo: Photo | ErrorData): photo is Photo => {
  if ("error" in photo) {
    return false;
  }
  return (
    (photo as Photo).image !== undefined &&
    (photo as Photo).firstColor !== undefined &&
    (photo as Photo).secondColor !== undefined
  );
};
