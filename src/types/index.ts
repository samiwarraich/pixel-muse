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
