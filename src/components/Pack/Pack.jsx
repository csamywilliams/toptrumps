import React from 'react';
import PropTypes from 'prop-types';
import PackStyled from './Pack.styled';

const Pack = ({ title, cover, imgAlt, onClick }) => {
  return (
    <PackStyled onClick={() => onClick(title)}>
      <h3>{title.toUpperCase()}</h3>
      <img className="pack__cover" src={cover} alt={imgAlt} />
    </PackStyled>
  );
};

Pack.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Pack;
