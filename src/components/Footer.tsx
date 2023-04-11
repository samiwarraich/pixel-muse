import { IFooter } from "@/types";

export default function Footer({ footer }: { footer: IFooter }) {
  return (
    <footer className="px-4 py-8">
      <div className="container mx-auto text-center">{footer?.text}</div>
    </footer>
  );
}
