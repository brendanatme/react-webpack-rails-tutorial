import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './layout/Layout';
import Home from './components/Home';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute
      component={Home}
    />
    {/* <Route
      path="react-router"
      component={TestReactRouter}
    />
    <Route
      path="react-router/redirect"
      component={TestReactRouterRedirect}
      onEnter={TestReactRouterRedirect.checkAuth}
    /> */}
  </Route>
);
