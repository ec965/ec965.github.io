import { ReactNode } from "react";
export type ImageData = {
  src: string;
  alt: string;
};

export type LinkData = {
  href: string;
  text: string;
};

export type PostData = {
  title: string;
  subtitle: string;
  body: string | ReactNode;
  links: LinkData[];
  images: ImageData[];
};
