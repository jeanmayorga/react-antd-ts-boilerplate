import { gql } from '@apollo/client';

import { OrganizationMinInterface } from '.';

export const GET_ORGANIZATIONS_QUERY = gql`
  query GetOrganizations(
    $limit: Float
    $causeId: String
    $lastOrganizationId: String
    $country: String
  ) {
    organizations: getOrganizations(
      limit: $limit
      causeId: $causeId
      lastOrganizationId: $lastOrganizationId
      country: $country
    ) {
      id
      logoUrl
      name
      adminName
      country
      createdAt
      updatedAt
    }
  }
`;
export interface GetOrganizationsVariables {
  limit?: number;
  causeId?: string;
  lastOrganizationId?: string;
  country?: string;
}

export interface GetOrganizationsResponse {
  organizations: OrganizationMinInterface[];
}
