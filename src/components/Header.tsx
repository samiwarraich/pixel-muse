import Link from "next/link";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";
import { IHeader, ISocialLink } from "@/types";

export default function Header({ header }: { header: IHeader }) {
  const { logo, logoAlt, title, socialLinks } = header;
  return (
    <header className="flex items-center justify-between pb-6 lg:pr-6">
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src={logo}
            alt={logoAlt}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="text-xl font-bold">{title}</div>
      </Link>
      <div className="flex space-x-4">
        {socialLinks?.map(
          ({ url, icon, color, size }: ISocialLink, index: number) => {
            const Icon = FaIcons[icon as keyof typeof FaIcons];
            return (
              <Link
                key={index}
                href={url}
                target="_blank"
                className={`hover:text-[${color}]`}
              >
                <Icon size={size} />
              </Link>
            );
          }
        )}
      </div>
    </header>
  );
}
