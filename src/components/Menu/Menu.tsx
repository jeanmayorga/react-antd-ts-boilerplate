import React from 'react';
import { HomeOutlined, AppstoreOutlined } from '@ant-design/icons';

import './Menu.less';
import { Logo } from '../Logo';
import { NavLink } from 'react-router-dom';

export function Menu() {
  return (
    <aside>
      <div className='menu-header'>
        <Logo size='small' withText />
      </div>
      <div className='menu-list'>
        <NavLink exact to='/'>
          <div className='item'>
            <HomeOutlined /> Home
          </div>
        </NavLink>
        <NavLink exact to='/organizations'>
          <div className='item'>
            <AppstoreOutlined /> Causes
          </div>
        </NavLink>
        <NavLink exact to='/organizations1'>
          <div className='item'>
            <AppstoreOutlined /> Organizations
          </div>
        </NavLink>
        <NavLink exact to='/organizations2'>
          <div className='item'>
            <AppstoreOutlined /> Organizations
          </div>
        </NavLink>
        <NavLink exact to='/organizations3'>
          <div className='item'>
            <AppstoreOutlined /> Organizations
          </div>
        </NavLink>
      </div>
    </aside>
  );
}
