import React, { Component } from 'react';


class MyComponent extends Component {



  componentWillMount() {
    alert('The component will mount');
    console.log('The component will mount');
  }

  componentDidMount() {
    alert('The component has been mounted');
    console.log('The component has been mounted');
  }



  render() {
    return (
      <div className="component">
        <h1>This is a new component</h1>
      </div>
    );
  }
}

export default MyComponent;
