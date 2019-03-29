import React, { Component } from 'react';
import TypeContext from './typeContext'

export default (WrappedComponent) => {
  return class TypeHoc extends Component {

    static contextType = TypeContext;

    alertSomething = () => {
      alert('something');
    }

    render() {
      return (
        <WrappedComponent {...this.props} type={this.context.type} alertSomething={this.alertSomething} />
      );
    }
  }
}