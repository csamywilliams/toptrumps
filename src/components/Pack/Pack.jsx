import React, { Component } from 'react';

class Pack extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: true
        };

        this.selectPack = this.selectPack.bind(this);
    }

    selectPack() {
        this.setState(state => ({
            isSelected: !state.isSelected
        }));
    }

    render() {

        return (
            <div>
                <h3>{this.props.title}</h3>
                <button onClick={this.selectPack} >SELECT</button>
            </div>
        );
    }
 
}

export default Pack;