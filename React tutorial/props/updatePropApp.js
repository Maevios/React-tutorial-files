import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'

class App extends Component {
  constructor(){
    super();

    this.state={
      name:"John"
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.state({
      name:"Joe"
    })
  }

  render() {
    return (
      <div className="App">
        <p>This is my first component</p>
        <Home name = {this.state.name}>
        </Home>
        <button onClick={this.onClick}>Click</button>
      </div>
    )
  }
}

export default App;
