import React from 'react';
import { render } from '@testing-library/react';
import { Greeting } from './Greeting';

test('should render hola mundo', () => {
  const { getByText } = render(<Greeting />);
  const linkElement = getByText(/hola mundo/i);
  expect(linkElement).toBeInTheDocument();
});
