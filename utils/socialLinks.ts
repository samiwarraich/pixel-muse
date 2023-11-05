import { FaLink, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ISocialLink } from "@/types";

export const socialLinks: ISocialLink[] = [
  {
    link: "https://samiwarraich.github.io",
    title: "Portfolio",
    icon: FaLink,
    iconSize: 16,
  },
  {
    link: "https://twitter.com/samiwarra1ch",
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
