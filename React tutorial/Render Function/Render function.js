import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const headline = 'this is a headline';
    return (
      <div className="App">
       <h1>My first headliune</h1>
       <h1>{headline}</h1>
      </div>
    )
  }
  }

export default App;
