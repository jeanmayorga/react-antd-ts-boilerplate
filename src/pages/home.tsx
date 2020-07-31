import React from 'react';
import { Button } from 'antd';
import { Greeting } from '../components';

export function Home() {
  return (
    <div>
      <Button>Ant design works</Button>
      <Greeting />
    </div>
  );
}
