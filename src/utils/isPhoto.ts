import { IPhoto, IError } from "@/types";

export const isPhoto = (photo: IPhoto | IError): photo is IPhoto => {
  if ("error" in photo) {
    return false;
  }
  return (
    (photo as IPhoto).image !== undefined &&
    (photo as IPhoto).firstColor !== undefined &&
    (photo as IPhoto).secondColor !== undefined
  );
};
