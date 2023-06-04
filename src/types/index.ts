interface Bot {
  title: string;
  username: string;
  url: string;
  image: string;
  alt: string;
  description: string;
}

interface Config {
  bots: Bot[];
}

interface Photo {
  image: string;
  firstColor: string;
  secondColor: string;
  rand: number;
}

interface ErrorData {
  error: string;
}

export { type Bot, type Config, type Photo, type ErrorData };
