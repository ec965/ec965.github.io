import * as React from "react";
// styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle, mainTheme } from "./styles/theme";
// components
import { ProjectPage } from "./pages/projects";
import { AboutPage } from "./pages/about";
import { LandingPage } from "./pages/landing";
import { Layout } from "./components/layout";
// router
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/about">
            <Layout>
              <AboutPage />
            </Layout>
          </Route>
          <Route path="/projects">
            <Layout>
              <ProjectPage />
            </Layout>
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
