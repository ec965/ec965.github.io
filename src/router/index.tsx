import * as React from "react";
import { Route, Switch, Link } from "react-router-dom";

const PageRouter = () => {
  return(
    <Switch>
      <Route path="/about">
      </Route>
      <Route path="/gallery">
      </Route>
      <Route path="/">
      </Route>
    </Switch>
  );
}
