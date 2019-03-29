import React, { Component, Fragment } from 'react';
import Warning from '../Warning'

export default class Home extends Component {

  state = {
    user: null,
    randomNumber: 11111
  };

  componentDidMount() {
    // setInterval(() => this.changeRandomNumber(), 4000)
  }

  users = [
    {
      name: 'name 1',
      age: 'age 1',
      phone: 'phone 1',
    },
    {
      name: 'name 2',
      age: 'age 2',
      phone: 'phone 2',
    },
    {
      name: 'name 3',
      age: 'age 3',
      phone: 'phone 3',
    },
    {
      name: 'name 4',
      age: 'age 4',
      phone: 'phone 4',
    },
  ];

  changeRandomNumber = () => {
    this.setState({ randomNumber: Math.floor(Math.random() * 100000) })
  }

  render() {
    return (
      <Fragment>
        <div>
          {
            this.users.map(user => {
              return (
                <div key={user.name}>
                  {`${user.name} ${user.age} ${user.phone}`}
                  <button onClick={() => this.setState({ user })}>Edit</button>
                </div>
              )
            })
          }
        </div>
        {
          !!this.state.user && (
            <Warning
              user={this.state.user}
              randomNumber={this.state.randomNumber}
            />
          )
        }
        <button onClick={this.changeRandomNumber}>change</button>
      </Fragment>
    );
  }
}