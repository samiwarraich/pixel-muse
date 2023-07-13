interface Bot {
  title: string;
  username: string;
  url: string;
  description: string;
}

interface Config {
  bots: Bot[];
}

interface Photo {
  image: string;
  colors: string[];
  rand: number;
}

interface ErrorData {
  error: string;
}

export { type Bot, type Config, type Photo, type ErrorData };
