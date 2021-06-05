import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      highlight: string;
    };
    lrPadding: string;
  fontSize: {
    h1: string,
    h2: string,
    h3: string,
    p: string,
  }
  }
}
