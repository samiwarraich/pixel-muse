import { Link, Image } from "@/components";
import { socialLinks } from "@/utils";

const Header = () => {
  return (
    <header className="flex items-center justify-between pb-4 md:pb-6 lg:pb-8 xl:pb-8 mx-4 md:mx-6 lg:mx-8 xl:mx-8">
      <Link href="/" className="flex items-center space-x-2 focus:outline-none">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image src="/images/pixel-muse-bot.png" alt="Pixel Muse Bot" />
        </div>
        <div className="text-xl font-bold">Pixel Muse</div>
      </Link>
      <div className="flex space-x-4">
        {socialLinks.map(({ link, title, icon: Icon, iconSize }) => {
          return (
            <Link
              title={title}
              key={link}
              href={link}
              target="_blank"
              className={`transition-all duration-200 hover:scale-125 focus-within:shadow-lg focus-within:scale-125 focus:outline-none`}
              aria-label={link}
            >
              <Icon size={iconSize} />
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
