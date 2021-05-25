import * as React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { Page, Row } from "./components/layout";

const mainTheme: DefaultTheme = {
  lrPadding: "12vw",
  colors: {
    main: "#FFF",
    secondary: "#000",
  },
};

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Page>
        <Row>
          <h1>hi</h1>
        </Row>
      </Page>
    </ThemeProvider>
  );
};
