import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

test('renders Login component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
});

test('renders the authentication header properly', () => {
  render(<Login />);
  const headingElement = screen.getByRole('heading', { level: 2, name: 'Hello, Welcome to the Self Service Dashboard!' }, { hidden: true });
  expect(headingElement).toBeInTheDocument();
});


