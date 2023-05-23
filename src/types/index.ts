interface IBot {
  title: string;
  username: string;
  url: string;
  image: string;
  alt: string;
  description: string;
}

interface IConfig {
  bots: IBot[];
}

interface IPhoto {
  url: string;
  firstColor: string;
  secondColor: string;
}

interface IError {
  error: string;
}

export { type IBot, type IConfig, type IPhoto, type IError };
