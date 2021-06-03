import { gql } from '@apollo/client';

export const GET_NEW_ACCESS_TOKEN = gql`
  query GetNewAccessToken($token: String!) {
    newAccessToken: getNewAccessToken(token: $token)
  }
`;
export interface GetNewAccessTokenResponse {
  newAccessToken: string | null;
}
export interface GetNewAccessTokenVariables {
  token: string;
}
