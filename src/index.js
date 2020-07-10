import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from './App';
import Home from './View/Home'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
