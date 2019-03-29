import React, { Component } from 'react';
import PropTypes from 'prop-types';
import C1 from './CompLev1';
import TypeContext from './typeContext';

const data = {
  type1: 'this is data of type 1',
  type2: 'this is data of type 2',
}

export default class Contact extends Component {

  state = {
    type: 'type1',
  };

  toggleType = () => {
    const { type } = this.state;
    this.setState({ type: type === 'type1' ? 'type2' : 'type1' })
  };

  render() {
    return (
      <TypeContext.Provider value={{ type: this.state.type }} >
        <div>
          Data in parent: {data[this.state.type]}
        </div>
        <C1 />
        <div>
          <button onClick={this.toggleType}>Toggle Type</button>
        </div>
      </TypeContext.Provider>
    );
  }
}