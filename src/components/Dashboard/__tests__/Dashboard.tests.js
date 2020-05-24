import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

test('renders Dashboard with correct heading', () => {
  const { queryAllByText } = render(<Dashboard />);
  expect(queryAllByText('Please select card type:'));
});

test('renders Dashboard with one set of cards', () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText('GOBLINS'));
});
