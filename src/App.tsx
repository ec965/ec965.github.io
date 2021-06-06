import * as React from "react";
import { postData } from "./data";
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
            <ProjectPage data={postData} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};
