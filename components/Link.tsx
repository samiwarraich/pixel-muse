import { memo, type ComponentProps } from "react";
import NextLink from "next/link";

type NextLinkProps = ComponentProps<typeof NextLink>;

const Link: React.FC<NextLinkProps> = ({ draggable = false, ...props }) => (
  <NextLink draggable={draggable} {...props} />
);

export default Link;
