const Footer = () => {
  return (
    <footer className="px-4 py-8">
      <div className="mx-auto text-center">{`© ${new Date().getFullYear()} All rights reserved.`}</div>
    </footer>
  );
};

export default Footer;
