import { DefaultTheme, createGlobalStyle } from "styled-components";

export const mainTheme: DefaultTheme = {
  lrSpacing: "10vw",
  colors: {
    main: "#2c2c2c",
    secondary: "#f8f8f8",
    highlight: "#cf4868",
    grey: "#808080",
  },
  fontSize: {
    h1: "32px",
    h2: "26px",
    h3: "22px",
    p: "18px",
  },
  fontFamily: {
    monospace: '"Lucida Console", "Courier New", monospace',
    sansSerif: "Arial, Verdana, Helvetica",
  },
  screenSize: {
    mobile: "(max-width: 600px)",
    tablet: "(max-width: 1100px)",
  },
  hover: {
    opacity: "60%",
    time: "0.3s",
  },
};

const downScale = (basePx: string, numOfPx: number): string =>
  parseInt(basePx) - numOfPx + "px";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.main};
    background-color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
    letter-spacing: 0.5px;
    line-height: 1.2;
    padding-left: ${(props) => props.theme.lrSpacing};
    padding-right: ${(props) => props.theme.lrSpacing};
  }
  p {
    font-size: ${(props) => props.theme.fontSize.p};
  }
  a {  
    position: relative; 
    color: ${(props) => props.theme.colors.highlight};
    text-decoration: none;
    transition: ${(props) => props.theme.hover.time};

    &:hover {
      transition: ${(props) => props.theme.hover.time};
      opacity: ${(props) => props.theme.hover.opacity};
    }

  }
  h1, h2, h3 {
    font-weight: 600;
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

  @media ${(props) => props.theme.screenSize.tablet} {
    h1{
      font-size: ${(props) => downScale(props.theme.fontSize.h1, 4)};
    }
    h2 {
      font-size: ${(props) => downScale(props.theme.fontSize.h2, 4)};
    }
    h3 {
      font-size: ${(props) => downScale(props.theme.fontSize.h3, 4)};
    }
  }

  @media ${(props) => props.theme.screenSize.mobile} {
    body {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;
