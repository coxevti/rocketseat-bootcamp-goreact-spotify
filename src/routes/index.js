import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Browser from '../pages/browse';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browser} />
  </Switch>
);

export default Routes;
