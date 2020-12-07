import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    {/* <Route path="/dashboard" component={} isPrivate /> */}
  </Switch>
);

export default Routes;
