import React from 'react';
import { Switch } from 'react-router-dom';

import { Home, Login, Organizations } from '../pages';

import { DefaultRoute } from './default-route';
import { PrivateRoute } from './private-route';
import { PublicRoute } from './public-route';
import { Layout } from '../components';

export function Routes() {
  return (
    <Layout>
      <Switch>
        <PublicRoute path='/login' component={<Login />} />
        <PrivateRoute path='/home' component={<Home />} />
        <PrivateRoute path='/organizations' component={<Organizations />} />
        <DefaultRoute />
      </Switch>
    </Layout>
  );
}
