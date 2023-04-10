import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaGithub, FaLink } from "react-icons/fa";
import { ISocialLinks } from "@/types";

export default function Header({ socialLinks }: { socialLinks: ISocialLinks }) {
  const { web, twitter, github } = socialLinks;
  return (
    <header className="flex items-center justify-between pb-6 lg:pr-6">
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src="/images/color-gradient-bot.jpg"
            alt="color gradient bot"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-xl font-bold">Color Gradient</div>
      </Link>
      <div className="flex space-x-4">
        <Link href={web} className="hover:text-white" target="_blank">
          <FaLink size={16} />
        </Link>
        <Link href={twitter} className="hover:text-[#00acee]" target="_blank">
          <FaTwitter size={16} />
        </Link>
        <Link href={github} className="hover:text-black" target="_blank">
          <FaGithub size={16} />
        </Link>
      </div>
    </header>
  );
}
