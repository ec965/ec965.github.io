import * as React from "react";
// styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle, mainTheme } from "./styles/theme";
// components
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { ProjectPage } from "./pages/projects";
import { AboutPage } from "./pages/about";
// router
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <ProjectPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};
