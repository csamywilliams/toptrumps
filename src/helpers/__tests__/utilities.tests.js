import { removeFromArray, addToArray, shiftFromArray } from '../utilities';

const CARDS = [
	{
		id: 1,
		name: 'Fizz',
	},
	{
		id: 2,
		name: 'Buzz',
	},
];

describe('removeFromArray', () => {
	test('should return a filtered array based on ID passed in', () => {
		const result = removeFromArray(CARDS, 2);

		expect(Object.keys(result).length).toBe(1);
	});

	test('should return the same array based on ID that doesnt exist', () => {
		const result = removeFromArray(CARDS, 3);

		expect(Object.keys(result).length).toBe(CARDS.length);
	});
});

describe('addToArray', () => {
	test('should add item to an empty array', () => {
		const result = addToArray([], { id: 1 });
		expect(result.length).toBe(1);
	});

	test('should add item to an existing array at the end', () => {
		const result = addToArray(CARDS, { id: 3 });
		expect(result.length).toBe(3);
		expect(result[result.length - 1].id).toBe(3);
	});
});

describe('shiftFromArray', () => {
	test('should return an array with the first item removed', () => {
		const result = shiftFromArray([{ name: 'card1' }, { name: 'card2' }]);
		expect(result.length).toBe(1);
	});
});
