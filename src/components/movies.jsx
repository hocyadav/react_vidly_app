import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = { 
        movies: getMovies()
     };

     handleDelete = (movie) => {
        console.log(movie);
     };

    render() { 
        return ( 
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
                {this.state.movies.map(
                movie => (
                           <tr>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button 
                                onClick={ ()=>this.handleDelete({movie}) }
                                className="btn btn-danger btn-sm">
                                Delete
                                </button>
                            </td>
                            </tr>
                        )
                )}
            </tbody>
        </table>
        );
    }
}
 
export default Movies;