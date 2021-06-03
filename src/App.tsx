import React from 'react';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { BrowserRouter } from 'react-router-dom';
import { LoadingProvider } from './hooks';
import { Routes } from './routes';

import './styles/App.less';
import { AuthProvider } from './hooks/useAuth';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const accessToken = localStorage.getItem('accessToken');
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <ApolloProvider client={client}>
      <LoadingProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </AuthProvider>
      </LoadingProvider>
    </ApolloProvider>
  );
}
