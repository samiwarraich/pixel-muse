interface IBot {
  title: string;
  username: string;
  url: string;
  image: string;
  imageAlt: string;
  description: string;
}

interface IConfig {
  bots: IBot[];
}

interface IError {
  error: string;
}

export { type IBot, type IConfig, type IError };
