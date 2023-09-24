interface IBot {
  title: string;
  username: string;
  url: string;
  description: string;
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

export { type IBot, type IConfig, type IPhoto, type IError };
