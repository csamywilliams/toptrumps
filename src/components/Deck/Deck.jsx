import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DeckStyled from './Deck.styled';
import Card from '../Card/Card';

const Deck = ({ pack, type, compareCards }) => {
	const [cards, setCards] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [count, setCount] = useState(0);
	const [activeCard, setActiveCard] = useState({});

	useEffect(() => {
		setCards(pack);
		setActiveCard(cards[count]);
	}, [pack, cards]);

	useEffect(() => {
		if (activeCard && activeCard.name) {
			setIsLoading(false);
		}
	}, [activeCard]);

	return (
		<DeckStyled>
			{!isLoading && (
				<Card
					activeCard={activeCard}
					mode={type}
					compareCards={compareCards}
				/>
			)}
		</DeckStyled>
	);
};

// Deck.propTypes = {
// 	pack: PropTypes..isRequired,
// };

export default Deck;
