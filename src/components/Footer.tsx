import { memo } from "react";

function Footer() {
  return (
    <footer className="px-4 py-8">
      <div className="mx-auto text-center">{`© ${new Date().getFullYear()} Pixel Muse.`}</div>
    </footer>
  );
}

export default memo(Footer);
