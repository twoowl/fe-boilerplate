import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './app';

test('renders app header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Boilerplate/i);
  expect(linkElement).toBeInTheDocument();
});
