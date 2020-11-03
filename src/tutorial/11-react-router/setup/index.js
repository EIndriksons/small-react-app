import React from 'react';

// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';

const ReactRouterSetup = () => {
  // ! react Router goes down the list and displays whichever
  // ! component is in its path and matches the path
  // * <Switch> component displays only the first match
  // * <Error> component with path="*" selects any other path

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
