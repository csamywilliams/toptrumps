import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard.jsx';

test('renders Dashboard with correct heading', () => {
    const { getByRole } = render(<Dashboard />);
    expect(getByRole('heading')).toHaveTextContent('Please select card type:');
});
