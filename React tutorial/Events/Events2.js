import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // onClick(event){
  //   console.log(event.target.value);
  // }

  onChange(event){
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="App">
         {
          //  <input onClick={this.onClick}  />
          <input onChange={this.onChange}  />
          }
      </div>
    )
  }
  }

export default App;
