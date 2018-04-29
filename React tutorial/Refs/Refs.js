import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props){
  super(props);

  this.onSubmit = this.onSubmit.bind(this);
}

onSubmit(event){
  event.preventDefault();

  console.log(this.first.value);
  }


  render() {
    return (
      <div className="App">

         <form onSubmit={this.onSubmit}>
         <div>
           <span>First</span>
           <input  ref={input => (this.first = input)}/>
         </div>
          <div>
           <span>Second</span>
           <input ref={input => (this.second = input)}/>
          </div>
         <button>submit</button>
       </form>

      </div>
    )
  }
  }

export default App;
