import React, { Component } from 'react';

class AddNewMovie extends Component {
 constructor(props){
   super(props);

   this.onSubmit = this.onSubmit.bind(this);
 }

 onSubmit(event){
   event.preventDefault();

   this.props.onAdd(this.name.value, this.genre.value);

   this.name.value = '';
   this.genre.value = '';
 }
  render() {
    return (
          <form onSubmit={this.onSubmit}>
          <div className="add">
          <span>Name</span>
           <input ref={name => this.name = name}/>
           <span>Gender</span>
           <input ref={genre => this.genre = genre} />
           </div>
          <button>AddMovie</button>
          </form>
           )
       }
  }


export default AddNewMovie;
