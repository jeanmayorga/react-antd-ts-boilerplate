import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useApolloClient } from '@apollo/client';

// import {
//   GET_NEW_ACCESS_TOKEN,
//   GetNewAccessTokenResponse,
//   GetNewAccessTokenVariables,
// } from '../graphql/auth';
import { GET_ME_QUERY, GetMeResponse, UserInterface } from '../graphql/users';
import { useLoading } from './useLoading';

const AuthContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserInterface | null;
  setUser: React.Dispatch<React.SetStateAction<UserInterface | null>>;
} | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const client = useApolloClient();
  const { setLoading } = useLoading();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserInterface | null>(null);

  // const accessToken = localStorage.getItem('accessToken');
  // const refreshToken = localStorage.getItem('refreshToken');

  useEffect(
    useCallback(() => {
      const getMeQuery = async () => {
        const { data } = await client.query<GetMeResponse>({
          query: GET_ME_QUERY,
          errorPolicy: 'all',
        });
        return data.user;
      };
      // const getNewAccessTokenQuery = async (token: string) => {
      //   const { data } = await client.query<GetNewAccessTokenResponse, GetNewAccessTokenVariables>({
      //     query: GET_NEW_ACCESS_TOKEN,
      //     variables: { token },
      //   });
      //   return data.newAccessToken;
      // };

      const verifyAuth = async () => {
        const user = await getMeQuery();
        if (!user) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');

          console.log('User is not logged!');
          // // console.log('enter here!!');
          // // console.log('accessToken', accessToken);
          // // console.log('refreshToken', refreshToken);
          // if (accessToken && refreshToken) {
          //   console.log('enter here two!!');
          //   const newAccessToken = await getNewAccessTokenQuery(refreshToken);
          //   if (newAccessToken) {
          //     localStorage.setItem('accessToken', newAccessToken);
          //     // await verifyAuth();
          //     return;
          //   }
          // }
          setUser(null);
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
        console.log('User is logged!');
        setUser(user);
        setIsAuthenticated(true);
        setLoading(false);
        return;
      };

      verifyAuth();
    }, [client, setLoading]),
    [],
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('No authContext found.');
  }

  return authContext;
}
