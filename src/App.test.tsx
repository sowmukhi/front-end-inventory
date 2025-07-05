import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hotel inventory dashboard title', () => {
  render(<App />);
  const title = screen.getByText(/hotel vista - manage inventory/i);
  expect(title).toBeInTheDocument();
});
