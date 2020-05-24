import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

test('renders Dashboard with correct heading', () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText('Select pack of trumps:')).toBeTruthy();
});

test('renders Dashboard with one set of cards', () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText('GOBLINS')).toBeTruthy();
});
