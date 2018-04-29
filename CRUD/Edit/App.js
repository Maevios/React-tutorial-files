import React, { Component } from 'react';
import './App.css';
import MovieItem from './MovieItem';
import AddNewMovie from './AddNewMovie';


const movies = [
  {
    name:'Pulp fiction',
    genre:'action'
  },
  {
    name:'The Shining',
    genre:'thriller'
  }
];

localStorage.setItem('movies', JSON.stringify(movies));

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: JSON.parse(localStorage.getItem('movies'))
    };


    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);

  }

  componentWillMount() {
    const movies = JSON.parse(localStorage.getItem('movies'));
    this.setState({movies});
  }
  getMovies() {
    return this.state.movies;
  }


  onEditSubmit(name, genre, originalName){
     let movies = this.getMovies();

       movies= movies.map ( movie=>{
       if( movie.name === originalName){
           movie.name = name;
           movie.genre = genre;
        }
        return movie;
        })
        this.setState({ movies });
  }

  onAdd(name, genre) {
   const movies = this.getMovies();

  movies.push ({
   name,
   genre
 });
  this.setState({movies});
}

  onDelete(name) {
    const movies = this.getMovies();
    const filteredMovies = movies.filter(movie =>{
      return movie.name !== name;
    })
    this.setState({ movies: filteredMovies });
  }



  render() {
    return (
      <div className="App">
       <h1 className="title">Movie finder</h1>
       <AddNewMovie
       onAdd= {this.onAdd}
      />

       {
         this.state.movies.map(movie => {
           return (
             <MovieItem
             key={movie.name}
             name={movie.name}
             genre={movie.genre}
             onDelete={this.onDelete}
             onEditSubmit ={this.onEditSubmit}
             />
           )
         })
       }
      </div>
    );
  }
}

export default App;
