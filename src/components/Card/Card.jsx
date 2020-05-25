import React from 'react';
import PropTypes from 'prop-types';
import CardStyled from './Card.styled';
import { sortCardKeys } from '../../helpers/manipulateCard';

const Card = ({ activeCard }) => {
	const card = sortCardKeys({ ...activeCard });
	const name = card.name;
	const img = card.img;
	const type = card.type;

	delete card.name;
	delete card.img;
	delete card.type;

	return (
		<CardStyled>
			<div className="card__row card__title">{name}</div>
			<div className="card__row">{img}</div>
			<div className="card__row">{type}</div>
			{Object.keys(card).map((key, index) => {
				return (
					<button key={index} className="card__fact card__row">
						<span className="card__key">{key}</span>
						<span className="card__value">{card[key]}</span>
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
