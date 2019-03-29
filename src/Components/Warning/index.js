import React, { Component } from 'react';


export default class Home extends Component {

  constructor(props) {
    super();
    this.state = {
      name: props.user.name || '',
      age: props.user.age || '',
      phone: props.user.phone || '',
    };
  }

  componentWillReceiveProps(np) {
    const { user } = np;
    const { user: lastUser } = this.props;
      this.setState({
        name: user.name || '',
        age: user.age || '',
        phone: user.phone || '',
      })
  }

  shouldComponentUpdate({ user }, { name }) {
    const { name: lastName } = this.state;
    const { user: lastUser } = this.props;
    console.log(name, lastName);
    if (
      user.name === lastUser.name
      || name === lastName
    ) {
      return false;
    }

    return true;
  }

  handleToggle = () => {
    const { isWarningVisible } = this.state;
    this.setState({ isWarningVisible: !isWarningVisible });
  };

  handleChange = (key) => (e) => {
    this.setState({ [key]: e.target.value })
  };

  componentWillUpdate(np, ns) {

  }

  render() {
    const { name, age, phone } = this.state;
    const { randomNumber } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={this.handleChange('name')}
        />
        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={this.handleChange('age')}
        />
        <input
          type="text"
          placeholder="phone"
          value={phone}
          onChange={this.handleChange('phone')}
        />
        {randomNumber}
      </div>
    );
  }
}