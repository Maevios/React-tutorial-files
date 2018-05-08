import React, { Component } from 'react';
import MyComponent from './myComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Initial name'
    };

    this.updateName = this.updateName.bind(this);
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div className="App">

           <h1>{this.state.title}</h1> 
           <div onClick={this.onClick}>Click here!</div> 

      {/* Controlled uncontrolled inputs */ }
        <input defaultValue="default" />
      {/* controlled input */ }

        <input value={this.state.name} onChange={this.updateName}/>
        <MyComponent />
      </div>
    );
  }
}

export default App;
