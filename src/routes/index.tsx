import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/home';

export function Routes() {
  return (
    <>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
      </Switch>
    </>
  );
}
