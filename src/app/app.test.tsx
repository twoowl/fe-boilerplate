import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import App from './app';

test('renders app header', () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/Boilerplate/i);
  expect(linkElement).toBeInTheDocument();
});
