import { Link } from "@/components";

const Footer = () => {
  return (
    <footer className="mt-8 md:mt-8 lg:mt-12 xl:mt-12">
      <hr className="border-custom-card-border" />
      <div className="py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-center items-center text-center text-sm space-y-2 sm:space-y-0 sm:space-x-2">
          <Link
            href="/privacy-policy"
            className="hover:underline focus:outline-none"
          >
            Privacy
          </Link>
          <span className="hidden sm:inline">·</span>
          <span>{`Pixel Muse © ${new Date().getFullYear()}`}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
