import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeckStyled from './Deck.styled';
import Card from '../Card/Card';

const Deck = ({ pack }) => {
  const [playersPack, setPlayersPack] = useState([]);
  const [computersPack, setComputersPack] = useState([]);

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
