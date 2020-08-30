import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GameStyled from './Game.styled';
import Deck from '../Deck/Deck';
import { shuffleDeck, splitDeck } from '../../helpers/manipulateDeck';
import {
	isValueGreater,
	isValueSame,
	removeFromArray,
	addToArray,
	shiftFromArray,
} from '../../helpers/utilities';
import CONSTANTS from '../../data/constants';
import CARDS from '../../data/cards';

const Game = ({ pack }) => {
	const [playersPack, setPlayersPack] = useState([]);
	const [computersPack, setComputersPack] = useState([]);
	const [cards, setCards] = useState([]);
	const [playerTurn, setPlayerTurn] = useState(true);
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

	const updatePacks = (player, computer) => {
		setComputersPack(computer);
		setPlayersPack(player);
	};

	const reorderPack = (pack) => {
		return addToArray(shiftFromArray(pack), pack[0]);
	};

	const changePlayerDeck = () => {
		console.log('playerWon', playerCard.id, computerCard.id);

		const alteredComputersPack = removeFromArray(
			[...computersPack],
			computerCard.id,
		);
		const alteredPlayersPack = addToArray([...playersPack], computerCard);

		updatePacks(
			reorderPack(alteredPlayersPack),
			reorderPack(alteredComputersPack),
		);
	};

	const changeComputerDeck = () => {
		console.log('computerWon', playerCard.id, computerCard.id);
		const alteredPlayersPack = removeFromArray(playersPack, playersPack.id);
		const alteredComputersPack = addToArray(computersPack, playerCard);
		updatePacks(
			reorderPack(alteredPlayersPack),
			reorderPack(alteredComputersPack),
		);
	};

	const checkTurn = (card1, card2) => {
		if (isValueGreater(card1, card2) || isValueSame(card1, card2)) {
			console.log('value is greater or the same', 'playerWins');
			setPlayerTurn(true);
			changePlayerDeck();
			return;
		}

		//todo: work out if values are the same what will happen

		console.log('computerWins');
		setPlayerTurn(false);
		changeComputerDeck();
		return;
	};

	const compareCard = (id, key, property, mode) => {
		console.log(id, key, property, mode, playerCard, computerCard);

		checkTurn(playerCard[key], computerCard[key]);

		//changeCards();
	};

	const computersTurn = (turn) => !turn;

	//TODO: add ability for computer to recursively play when player looses.

	return (
		<GameStyled>
			<div>
				<p>Your cards {playersPack.length}</p>
				Turn: {playerTurn.toString()}
				<Deck
					type={CONSTANTS.PLAYER}
					pack={playersPack}
					compareCards={compareCard}
				/>
			</div>
			<div>
				<p>Computer cards {computersPack.length}</p>
				Turn: {computersTurn(playerTurn).toString()}
				<Deck
					type={CONSTANTS.COMPUTER}
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
