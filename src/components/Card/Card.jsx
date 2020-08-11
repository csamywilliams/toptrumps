import React from 'react';
import PropTypes from 'prop-types';
import CardStyled from './Card.styled';
import { sortCardKeys } from '../../helpers/manipulateCard';

const Card = ({ activeCard, mode, compareCards }) => {
	const card = sortCardKeys({ ...activeCard });
	const { name, img, type, ...cardProps } = card;
	const disabled = mode === 'computer' ? true : false;

	const onClick = (key, property, mode) => {
		console.log(key, property);
		compareCards(key, property, mode);
		// compare score with another card
		// pass the key, value, mode back to deck
	};

	return (
		<CardStyled>
			<div className="card__row card__title">{name}</div>
			<div className="card__row">{img}</div>
			<div className="card__row">{type}</div>
			{Object.keys(cardProps).map((key, index) => {
				return (
					<button
						key={index}
						onClick={() => onClick(key, cardProps[key], mode)}
						className="card__fact card__row"
						disabled={disabled}
					>
						<span className="card__key">{key}</span>
						<span className="card__value">{cardProps[key]}</span>
					</button>
				);
			})}
		</CardStyled>
	);
};

Card.propTypes = {
	activeCard: PropTypes.shape({
		name: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
	}).isRequired,
};

export default Card;
