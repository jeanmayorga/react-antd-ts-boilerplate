import { gql } from '@apollo/client';
import { UserInterface } from '../users';

export const SIGN_IN_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    auth: signIn(email: $email, password: $password) {
      accessToken
      refreshToken
      user {
        id
        isAdmin
        name
        email
        createdAt
        updatedAt
      }
    }
  }
`;
export interface SignInResponse {
  auth: {
    accessToken: string;
    refreshToken: string;
    user: UserInterface | null;
  };
}

export interface SignInVariables {
  email: string;
  password: string;
}
