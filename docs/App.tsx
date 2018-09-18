import * as React from 'react';
import { Component } from 'react';
import { Switch, Route, HashRouter as Router, Redirect } from 'react-router-dom';
import Page from './pages/index';
import RoutesArr from './pages/components/routes';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Page} path='/docs/'/>
          <Route
            render={() => {
              return <Redirect to={RoutesArr[0].path}/>;
            }}
          />
        </Switch>
      </Router>
    );
  }
}
