import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth } from '../hooks';
import { NotFound } from '../pages/not-found';

interface Props {
  path: string;
  component: JSX.Element;
}

export function PrivateRoute({ path, component }: Props) {
  const { isAuthenticated } = useAuth();

  return <Route exact path={path} component={() => (isAuthenticated ? component : <NotFound />)} />;
}
