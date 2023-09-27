interface ISocialLink {
  link: string;
  icon: string;
  iconSize: number;
}

interface IBot {
  title: string;
  username: string;
  url: string;
  description: string;
  image: string;
  imageAlt: string;
  ariaLabel: string;
}

interface IConfig {
  bots: IBot[];
}

interface IPhoto {
  image: string;
  colors: string[];
  rand: number;
}

interface IError {
  error: string;
}

export { type ISocialLink, type IBot, type IConfig, type IPhoto, type IError };
