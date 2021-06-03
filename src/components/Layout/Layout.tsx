import { Col, Row } from 'antd';
import React from 'react';

import { useAuth } from '../../hooks';
import './Layout.less';
import { Menu, Header } from '../';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <div>{children}</div>;
  }

  return (
    <Row>
      <Col flex='250px'>
        <Menu />
      </Col>
      <Col flex='auto'>
        <Header />
        <div className='children'>{children}</div>
      </Col>
    </Row>
  );
}
