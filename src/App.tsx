import * as React from "react";
import {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle,
} from "styled-components";
import { Footer } from "./components/footer";

const mainTheme: DefaultTheme = {
  lrPadding: "12vw",
  colors: {
    main: "#FFF",
    secondary: "#000",
    highlight: "#32a852",
  },
  fontSize: {
    h1: "36px",
    h2: "32px",
    h3: "24px",
    p: "18px",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.secondary};
    font-family: Arial, Verdana, Helvetica;
  }
  p a {
    font-size: ${(props) => props.theme.fontSize.p};
  }
  a {  
    color: ${(props) => props.theme.colors.highlight};
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      opacity: 60%;
    }
  }
  h1 {
    font-size: ${(props) => props.theme.fontSize.h1};
  }
  h2 {
    font-size: ${(props) => props.theme.fontSize.h2};
  }
  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
  }
`;

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  );
};
