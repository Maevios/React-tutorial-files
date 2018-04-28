import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      count:0
    }
  }

  updateCount(){
    this.setState((prevState) =>{
      return {
        count : prevState.count + Math.floor(Math.random()* 5)
      }
    });
  }

  render() {
    return (
      <div className="App">
       <button onClick={( => this.updateCount)}>Change state</button>
      </div>
    )
  }
}

export default App;
