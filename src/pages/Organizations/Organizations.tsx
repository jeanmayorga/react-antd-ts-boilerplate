import React from 'react';
import { useQuery } from '@apollo/client';
import {
  GetOrganizationsResponse,
  GetOrganizationsVariables,
  GET_ORGANIZATIONS_QUERY,
} from '../../graphql/organizations';
import { Table } from 'antd';

export function Organizations() {
  const { loading, error, data } = useQuery<GetOrganizationsResponse, GetOrganizationsVariables>(
    GET_ORGANIZATIONS_QUERY,
    {
      variables: {
        limit: 90,
        country: 'Argentina'
      },
    },
  );

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Admin Name',
      dataIndex: 'adminName',
      key: 'adminName',
    },
    {
      title: 'country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
  ];

  return (
    <div>
      <h1>Organizations</h1>
      {loading && 'Esta cargando...'}
      {error && 'Tuvimos un error al cargar data'}
      {data && data.organizations && <Table dataSource={data.organizations} columns={columns} />}
    </div>
  );
}
