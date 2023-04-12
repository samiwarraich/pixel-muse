interface ISocialLink {
  url: string;
  color: string;
  icon: string;
  size: string;
}

interface IHeader {
  logo: string;
  logoAlt: string;
  title: string;
  socialLinks: ISocialLink[];
}

interface IBot {
  title: string;
  username: string;
  url: string;
  image: string;
  imageAlt: string;
  description: string;
}

interface IFooter {
  text: string;
}

interface IEdgeConfig {
  header: IHeader;
  bots: IBot[];
  footer: IFooter;
}

interface Error {
  error: string;
}

export {
  type ISocialLink,
  type IHeader,
  type IBot,
  type IFooter,
  type IEdgeConfig,
  type Error,
};

// description for port
// Developed and maintained a suite of bots for generating and sharing random gradient color images on Twitter and Telegram platforms.
// Implemented features such as daily tweets, message responses, group mentions, and channel posts
