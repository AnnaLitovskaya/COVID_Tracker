/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch id="main-app-content">
          <Route exact path="/" component={Home} />
          <Route path="#/search" component={Search} />
        </Switch>
      </Router>
    );
  }
}

export default App;
