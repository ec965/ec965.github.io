import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      highlight: string;
      grey: string;
    };
    lrSpacing: string;
    fontSize: {
      h1: string;
      h2: string;
      h3: string;
      p: string;
    };
    fontFamily: {
      monospace: string;
      sansSerif: string;
    };
    screenSize: {
      mobile: string;
      tablet: string;
    };
    hover: {
      opacity: string;
      time: string;
    };
  }
}
