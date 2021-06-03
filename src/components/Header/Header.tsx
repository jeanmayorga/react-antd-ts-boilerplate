import React from 'react';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
import { useAuth } from '../../hooks';
import { useHistory } from 'react-router-dom';
import { Badge, Button, Input } from 'antd';

import './Header.less';

export function Header() {
  const { push } = useHistory<typeof useHistory>();
  const { setIsAuthenticated, setUser } = useAuth();

  const doLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('resfreshToken');
    push('/login');
  };

  return (
    <header>
      <div className='search-box'>
        <Input
          placeholder='Search anything...'
          suffix={<SearchOutlined />}
          style={{ width: '400px' }}
        />
      </div>
      <div className='actions'>
        <Badge dot>
          <Button shape='circle' icon={<BellOutlined />} />
        </Badge>
        <Button danger shape='round' onClick={doLogout}>
          Log out
        </Button>
      </div>
    </header>
  );
}
