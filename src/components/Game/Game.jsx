import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GameStyled from './Game.styled';
import Deck from '../Deck/Deck';
import { shuffleDeck, splitDeck } from '../../helpers/manipulateDeck';
import { isValueGreater, isValueSame } from '../../helpers/utilities';

import CARDS from '../../data/cards';

const Game = ({ pack }) => {
	const [playersPack, setPlayersPack] = useState([]);
	const [computersPack, setComputersPack] = useState([]);
	const [cards, setCards] = useState([]);
	const [turnPlayer, setPlayerTurn] = useState(true);
	const [playerCard, setPlayerCard] = useState({});
	const [computerCard, setComputerCard] = useState({});

	useEffect(() => {
		setCards(shuffleDeck(CARDS[pack]));
	}, [pack]);

	useEffect(() => {
		const deckHalved = splitDeck(cards);
		setPlayersPack(deckHalved.playerOne);
		setComputersPack(deckHalved.computer);
		setPlayerCard(deckHalved.playerOne[0]);
		setComputerCard(deckHalved.computer[0]);
	}, [cards, pack]);

	const checkTurn = (card1, card2) => {
		if (isValueGreater(card1, card2) || isValueSame(card1, card2)) {
			console.log('value is greater or the same', 'playerWins');
			setPlayerTurn(true);
			return;
		}

		//todo: work out if values are the same what will happen

		console.log('computerWins');
		setPlayerTurn(false);
		return;
	};

	const compareCard = (key, property, mode) => {
		console.log(key, property, mode, playerCard, computerCard);

		const turn = checkTurn(playerCard[key], computerCard[key]);
	};

	return (
		<GameStyled>
			<div>
				Your cards
				<Deck
					type="player"
					pack={playersPack}
					compareCards={compareCard}
				/>
			</div>
			<div>
				Computer cards
				<Deck
					type="computer"
					pack={computersPack}
					compareCards={compareCard}
				/>
			</div>
		</GameStyled>
	);
};

Game.propTypes = {
	pack: PropTypes.string.isRequired,
};

export default Game;
