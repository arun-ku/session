import React, { Component } from 'react';

import Configs from '../../config';

export default class Footer extends Component {

  constructor() {
    super();
    this.state = {
      makeHits: Configs.makeApiCalls,
      loadingData: Configs.makeApiCalls,
    };
  }

  componentDidMount() {
    const { makeHits } = this.state;
    if (makeHits) {
      this.setState({ loadingData: true }, () => {
        this.timer = setTimeout(() => {
          this.setState({ loadingData: false });
        }, 3000)
      })
    }
  }

  render() {
    const { loadingData, makeHits } = this.state;
    return (
      <div className="footer">
        Footer
        {
          makeHits && (
            <span className="data-base">
              {
                loadingData ? 'Loading data...' : 'Some random data from api'
              }
            </span>
          )
        }
      </div>
    );
  }
}
