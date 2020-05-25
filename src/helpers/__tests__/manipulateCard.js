import { sortCardKeys } from '../manipulateCard';

const TEST_CARD = {
	name: 'test-name',
	skill: 'test-skill',
	magic: 'test-magic',
	colour: 'test-colour',
};

describe('sortCardKeys', () => {
	test('should return a object with the same amount of keys', () => {
		const result = sortCardKeys(TEST_CARD);

		expect(Object.keys(result).length).toBe(Object.keys(TEST_CARD).length);
	});

	test('should return a object with keys returned in alphabetical order', () => {
		const expectedResult = {
			colour: TEST_CARD.colour,
			magic: TEST_CARD.magic,
			name: TEST_CARD.name,
			skill: TEST_CARD.skill,
		};

		const result = sortCardKeys(TEST_CARD);

		expect(result).toEqual(expectedResult);
	});
});
