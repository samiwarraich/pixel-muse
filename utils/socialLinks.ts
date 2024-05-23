import { FaLink, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";

interface ISocialLink {
  link: string;
  title: string;
  icon: IconType;
  iconSize: number;
}

export const socialLinks: ISocialLink[] = [
  {
    link: "https://sami.warraich.co",
    title: "Portfolio",
    icon: FaLink,
    iconSize: 16,
  },
  {
    link: "https://x.com/samiwarra1ch",
    title: "X",
    icon: FaXTwitter,
    iconSize: 16,
  },
  {
    link: "https://github.com/samiwarraich",
    title: "Github",
    icon: FaGithub,
    iconSize: 16,
  },
];
