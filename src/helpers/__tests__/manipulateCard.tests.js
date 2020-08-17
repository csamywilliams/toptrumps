import { sortCardKeys, addPropertyToAllObjects } from '../manipulateCard';

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

describe('addPropertyToAllObjects', () => {
	test('should return an empty array if not items exist in array', () => {
		const result = addPropertyToAllObjects([], 'property', 1);
		expect(Object.keys(result).length).toBe(0);
	});

	test('should return the array with item extended to have a new property and value', () => {
		const property = 'visible';
		const value = true;

		const result = addPropertyToAllObjects([TEST_CARD], property, value);

		expect(Object.keys(result).length).toBe(1);
		expect(result[0][property]).toBe(value);
	});
});
