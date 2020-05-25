import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card';

const TEST_CARD = {
	name: 'test-name',
	img: 'test-img',
	type: 'test-type',
	skill: 'test-skill',
	magic: 'test-magic',
	colour: 'test-colour',
};

describe('Card component', () => {
	it('should render a card component with then name', () => {
		const { getByText } = render(<Card activeCard={TEST_CARD} />);
		expect(getByText(TEST_CARD.name)).toBeTruthy();
	});
});
