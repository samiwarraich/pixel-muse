import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="px-4 py-8">
      <div className={`${firaCode.className} container mx-auto text-center`}>
        &copy; 2023 All rights reserved.
      </div>
    </footer>
  );
}
