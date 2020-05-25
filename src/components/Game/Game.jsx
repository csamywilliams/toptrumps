import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GameStyled from './Game.styled';
import Deck from '../Deck/Deck';
import { shuffleDeck, splitDeck } from '../../helpers/manipulateDeck';

import CARDS from '../../data/cards';

const Game = ({ pack }) => {
	const [playersPack, setPlayersPack] = useState([]);
	const [computersPack, setComputersPack] = useState([]);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		setCards(shuffleDeck(CARDS[pack]));
	}, [pack]);

	useEffect(() => {
		const deckHalved = splitDeck(cards);
		setPlayersPack(deckHalved.playerOne);
		setComputersPack(deckHalved.computer);
	}, [cards, pack]);

	return (
		<GameStyled>
			<div>
				Your cards
				<Deck type="player" pack={playersPack} />
			</div>
			<div>
				Computer cards
				<Deck type="computer" pack={computersPack} />
			</div>
		</GameStyled>
	);
};

Game.propTypes = {
	pack: PropTypes.string.isRequired,
};

export default Game;
