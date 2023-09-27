import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";
import { ISocialLink } from "@/types";

function Header() {
  return (
    <header className="flex items-center justify-between pb-4 md:pb-6 lg:pb-8 xl:pb-8 mx-4 md:mx-6 lg:mx-8 xl:mx-8">
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src="/images/pixel-muse-bot.jpeg"
            alt="Pixel Muse Bot"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="text-xl font-bold">Pixel Muse</div>
      </Link>
      <div className="flex space-x-4">
        {socialLinks.map(({ link, icon, iconSize }: ISocialLink) => {
          const Icon = FaIcons[icon as keyof typeof FaIcons];
          return (
            <Link
              key={link}
              href={link}
              target="_blank"
              className={`transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1`}
              aria-label={link}
            >
              <Icon size={iconSize} />
            </Link>
          );
        })}
      </div>
    </header>
  );
}

export default memo(Header);

const socialLinks = [
  {
    link: "https://samiwarraich.github.io",
    icon: "FaLink",
    iconSize: 16,
  },
  {
    link: "https://twitter.com/samiwarra1ch",
    icon: "FaTwitter",
    iconSize: 16,
  },
  {
    link: "https://github.com/samiwarraich",
    icon: "FaGithub",
    iconSize: 16,
  },
];
