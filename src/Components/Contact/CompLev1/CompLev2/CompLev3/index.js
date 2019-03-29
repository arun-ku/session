import React, { Component } from 'react';
import injectType from '../../../injectType';

const data = {
  type1: 'this is data of type 1',
  type2: 'this is data of type 2',
};

class CompLev3 extends Component {

  render() {
    return (
      <div  onClick={this.props.alertSomething}>
        {data[this.props.type]}
      </div>
    );
  }
}

export default injectType(CompLev3);