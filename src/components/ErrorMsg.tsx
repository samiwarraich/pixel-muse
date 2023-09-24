import { memo } from "react";

interface ErrorMsgProps {
  name: string;
  message: string;
}

function ErrorMsg({ name, message }: ErrorMsgProps) {
  if (!name || !message) return null;

  const styles: { [key: string]: string } = {
    image: "flex items-center justify-center h-full",
    boundary: "flex justify-center items-center h-screen text-xl",
    card: "max-w-sm rounded overflow-hidden shadow-lg border-1 border-line backdrop-brightness-125",
  };

  const style = styles[name];

  return (
    <div className={style}>
      {name === "card" ? (
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
}

export default memo(ErrorMsg);
