import { ISocialLink } from "@/types";
import { FaLink, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialLinks: ISocialLink[] = [
  {
    link: "https://samiwarraich.github.io",
    title: "Portfolio",
    icon: FaLink,
    iconSize: 16,
  },
  {
    link: "https://twitter.com/samiwarra1ch",
    title: "Twitter",
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
