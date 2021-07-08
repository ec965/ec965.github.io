import * as React from "react";
// styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle, mainTheme } from "./styles/theme";
// components
import { ProjectPage } from "./pages/projects";
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
        <Layout>
          <Switch>
            <Route path="/projects">
              <ProjectPage />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};
