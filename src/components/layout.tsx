import * as React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
interface LayoutProps {
  children: React.ReactNode;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
