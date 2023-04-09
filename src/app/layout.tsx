import "./globals.css";

export const metadata = {
  title: "Color Gradient",
  description: "Color Gradient",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
