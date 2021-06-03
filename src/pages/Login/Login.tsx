import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LoginOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { Logo } from '../../components';

import { SIGN_IN_MUTATION, SignInVariables, SignInResponse } from '../../graphql/auth';
import { useAuth } from '../../hooks';

import './styles.less';

export function Login() {
  const { push } = useHistory<typeof useHistory>();
  const { setIsAuthenticated, setUser } = useAuth();

  const [error, setError] = useState<string | null>(null);
  const [signIn, { loading }] = useMutation<SignInResponse, SignInVariables>(SIGN_IN_MUTATION, {
    errorPolicy: 'none',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doLogin = async ({ email, password }: any) => {
    try {
      const { data } = await signIn({ variables: { email, password } });

      if (data?.auth.user?.isAdmin) {
        localStorage.setItem('accessToken', data.auth.accessToken);
        localStorage.setItem('refreshToken', data.auth.refreshToken);
        setIsAuthenticated(true);
        setUser(data.auth.user);
        push('/home');
      } else {
        throw new Error('You must be an admin');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='auth__box_out'>
      <div className='auth__box_container'>
        <div className='logo'>
          <Logo />
        </div>
        <div className='auth__box'>
          <h1>Sign In</h1>
          <div className='hLine'></div>
          <p>Gentem support team platform</p>
          <Form onFinish={doLogin}>
            <Form.Item name='email'>
              <Input size='large' prefix={<UserOutlined />} placeholder='Email' />
            </Form.Item>
            <Form.Item name='password'>
              <Input.Password
                size='large'
                prefix={<LockOutlined />}
                placeholder='Password'
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>
            {error && <Alert message={error} type='error' />}
            <Button
              type='primary'
              size='large'
              block
              shape='round'
              htmlType='submit'
              loading={loading}
              icon={<LoginOutlined />}
            >
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
