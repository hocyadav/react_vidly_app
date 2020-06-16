import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = { 
        movies: getMovies()
     };
     //LOGIC : create new movie object except given id movie
     handleDelete = movie => {
         console.log("Deleted",movie._id);//not able to access
         const newMovies = this.state.movies.filter(m => m._id !== movie._id);//create new movie object 
         this.setState( {movies : newMovies} );//set new movie object
     };

    render() { 
        if(this.state.movies.length === 0) {
            return <p>There is no movies in the data base.</p>
        }
        return ( <React.Fragment>
        <p>Showing {this.state.movies.length} movies in the database</p>
        <table className="table">
            {/* table.table>thead>tr>th*4 */}
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (
                           <tr key = {movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <button 
                                    onClick={ () => this.handleDelete(movie) }
                                    className="btn btn-danger btn-sm">
                                    Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
            </tbody>
        </table>
        </React.Fragment>

        
        );
    }
}
 
export default Movies;