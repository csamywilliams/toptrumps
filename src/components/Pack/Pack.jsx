import React, { Component } from 'react';
import PackStyled from './Pack.styled';

class Pack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: true,
    };

    this.selectPack = this.selectPack.bind(this);
  }

  selectPack() {
    this.setState((state) => ({
      isSelected: !state.isSelected,
    }));
  }

  render() {
    return (
      <PackStyled>
        <h3>{this.props.title}</h3>
        <img
          className="pack__cover"
          src={this.props.cover}
          alt={this.props.imgAlt}
        />
        <p className="pack__prompt">SELECT</p>
      </PackStyled>
    );
  }
}

export default Pack;
