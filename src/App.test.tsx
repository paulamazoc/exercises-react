import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const counterComponent = screen.getByTestId('counter-container');
  expect(counterComponent).toBeInTheDocument();
});
