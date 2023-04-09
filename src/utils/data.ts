interface IBotData {
  title: string;
  username: string;
  url: string;
  image: string;
  description: string;
}

interface ISocialLinkData {
  web: string;
  twitter: string;
  github: string;
}

const botData: IBotData[] = [
  {
    title: "Color Gradient Bot",
    username: "@gradient_bot",
    url: "https://twitter.com/gradient_bot",
    image: "/images/color-gradient-bot.jpg",
    description:
      "A Twitter bot that tweets a random gradient color image every day.",
  },
  {
    title: "Color Gradient Bot",
    username: "@colorGradientBot",
    url: "https://t.me/colorGradientBot",
    image: "/images/color-gradient-bot.jpg",
    description:
      "A Telegram bot that sends a random gradient color image on every message.",
  },
  {
    title: "Color Gradient Group",
    username: "@colorGradientGroup",
    url: "https://t.me/colorGradientGroup",
    image: "/images/color-gradient-bot.jpg",
    description:
      "A Telegram group where you can mention the bot and receive a random gradient color image.",
  },
  {
    title: "Color Gradient Channel",
    username: "@colorGradientChannel",
    url: "https://t.me/colorGradientChannel",
    image: "/images/color-gradient-bot.jpg",
    description:
      "A Telegram channel where the bot posts a random gradient color image every day.",
  },
];

const socialLinkData: ISocialLinkData = {
  web: "https://samiwarraich.github.io",
  twitter: "https://twitter.com/samiwarraich2",
  github: "https://github.com/samiwarraich",
};

export { botData, type IBotData, socialLinkData };

// description
// Developed and maintained a suite of bots for generating and sharing random gradient color images on Twitter and Telegram platforms.
// Implemented features such as daily tweets, message responses, group mentions, and channel posts
