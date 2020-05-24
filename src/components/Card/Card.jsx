import React from 'react';
import PropTypes from 'prop-types';
import CardStyled from './Card.styled';

const Card = ({ name }) => {
  return (
    <CardStyled>
      <div>{name}</div>
    </CardStyled>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
