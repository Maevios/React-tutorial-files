import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

class Home extends Component {
  render() {
    return (
      <div className="App">
      <p>Name :{this.props.name}</p>
      </div>
    )
  }
}

export default Home;
