import React, { Component } from 'react';

class MovieItem extends Component {

    constructor(props) {
        super(props);

        this.state={
            isEdit: false
        };

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.name);
    }

    onEdit(){
        this.setState({isEdit: true});
    }

    onEditSubmit(event){
        event.preventDefault();
        this.props.onEditSubmit(this.name.value, this.genre.value, this.props.name);

        this.setState({isEdit: false});
    }

  render() {
      const {name, genre} = this.props;
    return (
        <div>
           {
               this.state.isEdit ?
               (
                <form className="movielist" onSubmit={this.onEditSubmit}>
                  <div>
                    <span>Name</span>
                    <input ref={name => this.name = name}
                    defaultValue={name}/>
                 </div>
                 <div>
                    <span>Genre</span>
                    <input ref={genre => this.genre = genre}
                    defaultValue={genre}/>
                 </div>
                <button>Save</button>
                </form>
               ):
               (
              <div className="movielist">
              <div>Movie: {name}</div>
              <div>Genre: {genre}</div>
              <button onClick={this.onEdit}>Edit</button>
              <button onClick={this.onDelete}>Delete</button>
             </div>
               )
            }
        </div>
           ) 
       }    
  }


export default MovieItem;

