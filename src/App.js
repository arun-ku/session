import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import './index.css';

import Configs from './config';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      csr: Configs.spa,
    };
  }

  componentDidMount() {

  }

  render() {
    const { csr } = this.state;
    return (
      <BrowserRouter>
        <div className="base">
          <div className="navbar">
            {
              csr ? (
                <Fragment>
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/contact-us">Contact Us</Link>
                </Fragment>
              ) : (
                <Fragment>
                  <a href="/">Home</a>
                  <a href="/about">About Us</a>
                  <a href="/contact-us">Contact Us</a>
                </Fragment>
              )
            }
          </div>
          <div className="main-container">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact-us" component={Contact} />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
