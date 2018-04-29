import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const fruits = [
    'apple',
    'banana',
    'orange'
    ]
    return (
      <div className="App">
       <h1>
          {
            fruits.map(item =>
            <div key={item}>{item}</div>
            )
          }
       </h1>
      </div>
    )
  }
  }

export default App;
