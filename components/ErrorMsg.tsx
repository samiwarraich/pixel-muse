import { memo } from "react";

interface ErrorMsgProps {
  type: "image" | "boundary" | "card";
  message: string;
}

const ErrorMsg = ({ type, message }: ErrorMsgProps) => {
  if (!type || !message) return null;

  const styles: { [key: string]: string } = {
    image: "flex items-center justify-center h-full px-5 text-center",
    boundary: "flex justify-center items-center h-3/4 text-xl",
    card: "max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg px-5 text-center backdrop-brightness-125 border border-custom-card-border",
  };

  const style = styles[type];

  return (
    <div className={style}>
      {type === "card" ? (
        <div className="relative h-80 w-full">
          <div className="flex items-center justify-center h-full">
            <p>{message}</p>
          </div>
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default memo(ErrorMsg);
