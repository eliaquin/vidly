import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  renderLegend = () => {
    const { movies } = this.state;
    return movies.length > 0 ? (
      <p>Showing {movies.length} movies in the database.</p>
    ) : (
      <p>There are no movies in the database.</p>
    );
  };

  deleteItem = itemId => {
    const { movies } = this.state;
    var newArr = movies.filter(movie => movie._id !== itemId);
    this.setState({ movies: newArr });
  };

  renderTable = () => {
    if (this.state.movies.length === 0) return null;
    return (
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th />
          </tr>
        </thead>
        <tbody>{this.renderMovies()}</tbody>
      </table>
    );
  };

  renderMovies = () => {
    return this.state.movies.map(movie => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              this.deleteItem(movie._id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <React.Fragment>
        {this.renderLegend()}
        {this.renderTable()}
      </React.Fragment>
    );
  }
}

export default Movies;
