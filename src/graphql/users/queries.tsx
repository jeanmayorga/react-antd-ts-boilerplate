import { gql } from '@apollo/client';

import { UserInterface } from '.';

export const GET_ME_QUERY = gql`
  query GetMe {
    user: getMe {
      id
      isAdmin
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export interface GetMeResponse {
  user: UserInterface | null;
}
