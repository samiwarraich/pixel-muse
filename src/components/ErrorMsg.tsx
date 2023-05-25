export default function ErrorMsg({
  name,
  message,
}: {
  name: string;
  message: string;
}) {
  if (!name || !message) return null;
  if (name === "image") {
    return (
      <div className="flex items-center justify-center h-full">
        <p>{message}</p>
      </div>
    );
  }
  if (name === "boundary") {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        {message}
      </div>
    );
  }
  if (name === "card") {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg border-1 border-line">
        <div className="relative h-80 w-full">
          <div className="flex items-center justify-center h-full">
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
