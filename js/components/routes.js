/**
 * Created by krelix on 01/04/2016.
 */

import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './main';

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
      </Router>
    );
  }
}