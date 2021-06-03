import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth } from '../hooks';

import { Home, Login } from '../pages';

export function DefaultRoute() {
  const { isAuthenticated } = useAuth();

  return <Route component={() => (isAuthenticated ? <Home /> : <Login />)} />;
}
