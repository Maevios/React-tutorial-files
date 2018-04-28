import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

class Home extends Component {
  render() {
    return (
      <div className="App">
      <p>Name :{this.props.name} Age :{this.props.age}</p>
      <h2>User : {this.props.user.name}</h2>
      <h3>Skills</h3>
      {this.props.children}
      <ul>
        {this.props.user.skills.map((skill,i) => <li  key={i}></li>)}
      </ul>
      </div>
    )
  }
}

const PropTypes ={
  name:PropTypes.string,
  age:PropTypes.number,
  user:PropTypes.object
}

export default Home;
