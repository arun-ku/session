import React, { Component } from 'react';
import C3 from './CompLev3';
import injectType from '../../injectType';

class CompLev2 extends Component {
  render() {
    return (
      <div>
        {this.props.type}
        <C3 />
      </div>
    );
  }
}

export default injectType(CompLev2);