import Link from "next/link";

function Footer() {
  return (
    <footer className="py-8">
      <div className="flex flex-col sm:flex-row justify-center text-center text-sm space-y-2 sm:space-y-0 sm:space-x-2">
        <div>
          <Link
            href="/privacy-policy"
            className="hover:underline focus:outline-none select-none"
            draggable={false}
          >
            Privacy
          </Link>
        </div>
        <div className="hidden sm:block">·</div>
        <div>{`Pixel Muse © ${new Date().getFullYear()}`}</div>
      </div>
    </footer>
  );
}

export default Footer;
