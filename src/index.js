import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "./App";
import Home from "./View/Home";
import DetailProject from "./View/DetailProject";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/project/:id">
        <DetailProject />
      </Route>
      <Route path="*">
        <Redirect to={"/"} />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
