import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'

class App extends Component {
  render() {
    var user={
      name:"Joe",
      skills:[
        'HTML',
        'CSS',
        'Javascript'
      ]
    }
    return (
      <div className="App">
        <p>This is my first component</p>
        <Home name = {John} age={27} user={user}>
        <p>hello world</p>
        </Home>
      </div>
    )
  }
}

export default App;
