interface IBot {
  title: string;
  username: string;
  url: string;
  description: string;
  image: string;
  imageAlt: string;
  ariaLabel: string;
}

interface IEdgeConfig {
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

export { type IBot, type IEdgeConfig, type IPhoto, type IError };
