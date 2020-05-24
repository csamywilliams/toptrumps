import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DeckStyled from './Deck.styled';
import Card from '../Card/Card';
import { shuffleDeck } from '../../helpers/manipulateDeck';

import CARDS from '../../data/cards';

const Deck = ({ pack }) => {
  const [playersPack, setPlayersPack] = useState([]);
  const [computersPack, setComputersPack] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(shuffleDeck(CARDS[pack]));
  }, [pack]);

  //TODO: find best place to initially shuffle the cards
  //call the splitDeck function to return playerOne and computer cards
  //store initial state of both decks of cards

  return (
    <DeckStyled>
      <div>
        Your cards
        <Card name="placeholder1" />
      </div>
      <div>
        Computer cards
        <Card name="placeholder2" />
      </div>
    </DeckStyled>
  );
};

Deck.propTypes = {
  pack: PropTypes.string.isRequired,
};

export default Deck;
