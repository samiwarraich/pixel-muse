import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  twitter: {
    title: "404",
  },
  openGraph: {
    title: "404",
  },
};

function NotFound() {
  return (
    <div className="flex justify-center items-center h-3/4 text-xl">
      404 - Page Not Found
    </div>
  );
}

export default NotFound;
