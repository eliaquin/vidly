import React, { Component } from "react";
import Like from "./common/Like";
import Pagination from "./common/Pagination";
import { getMovies } from "./../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4
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

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({
      movies
    });
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
          <Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
        </td>
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

  handlePageChange = page => {
    console.log(page);
  };

  render() {
    return (
      <React.Fragment>
        {this.renderLegend()}
        {this.renderTable()}
        <Pagination
          numberOfItems={this.state.movies.length}
          numberOfItemsPerPage={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
