import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./src/App.css', () => {
  return {};
});

test('renders the App component', () => {
  render(<App />);
  const appContainer = screen.getByTestId('app-container');
  expect(appContainer).toBeInTheDocument();
});

test('renders the Login component', () => {
  render(<App />);
  const loginComponent = screen.getByTestId('login-component');
  expect(loginComponent).toBeInTheDocument();
});
