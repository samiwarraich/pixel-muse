import Link from "next/link";
import Image from "next/image";
import { FaLink, FaTwitter, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between pb-6 mx-4 lg:mx-8">
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src="/images/pixel-muse-bot.jpeg"
            alt="pixel muse bot"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="text-xl font-bold">Pixel Muse</div>
      </Link>
      <div className="flex space-x-4">
        <Link
          href="https://samiwarraich.github.io"
          target="_blank"
          className={`hover:text-[#ffffff]`}
        >
          <FaLink size={16} />
        </Link>
        <Link
          href="https://twitter.com/samiwarraich2"
          target="_blank"
          className={`hover:text-[#00acee]`}
        >
          <FaTwitter size={16} />
        </Link>
        <Link
          href="https://github.com/samiwarraich"
          target="_blank"
          className={`hover:text-[#000000]`}
        >
          <FaGithub size={16} />
        </Link>
      </div>
    </header>
  );
}
