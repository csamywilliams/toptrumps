import { shuffleDeck, splitDeck } from '../manipulateDeck';

import CARDS from '../../data/cards';

const DEFAULT_PACK_SIZE = 30;
const SPLIT_DECK_SIZE = 15;
const TEST_DECK = CARDS.goblins;

describe('shuffleDeck', () => {
  const data = CARDS.goblins;

  test('should return a deck of cards', () => {
    const result = shuffleDeck(TEST_DECK);

    expect(result.length).toBe(DEFAULT_PACK_SIZE);
  });

  test('should return a deck of cards in random order compared to passed in deck', () => {
    const result = shuffleDeck(TEST_DECK);

    expect(result.length).toBe(DEFAULT_PACK_SIZE);
    expect(result[0].name).not.toBe(TEST_DECK[0].name);
  });
});

describe('splitDeck', () => {
  it('should return an object with two sets of playing cards', () => {
    const result = splitDeck(TEST_DECK);

    expect(result.playerOne.length).toBe(SPLIT_DECK_SIZE);
    expect(result.computer.length).toBe(SPLIT_DECK_SIZE);
  });

  it('should not contain duplicate cards in player one array', () => {
    const result = splitDeck(TEST_DECK);
    const playerOneDeck = result.playerOne;
    const computerDeck = result.computer;

    expect(playerOneDeck).not.toContainEqual(
      expect.objectContaining(computerDeck[0]),
    );
  });

  it('should not contain duplicate card from player one in computer array', () => {
    const result = splitDeck(TEST_DECK);

    expect(result.computer).not.toContainEqual(
      expect.objectContaining(result.playerOne[0]),
    );
  });
});
