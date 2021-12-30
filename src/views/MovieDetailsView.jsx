import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import imdbApi from '../servises/imdbApi';
import MovieDetails from '../components/MovieDetails';

class MovieDetailsPage extends Component {
  state = {
    movieData: {},
    error: '',
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    imdbApi
      .getMovie(movieId)
      .then(({ results }) => this.setState({ movieData: results[0] }))
      .catch(err => this.setState({ error: err.message }));
  }

  handleGoBack = () => {
    const { location } = this.props;

    location.state?.from
      ? this.props.history.push(location.state.from)
      : this.props.history.push('/');
  };

  render() {
    const { movieData } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleGoBack} className="button">
          Go back
        </button>
        {this.state.error && <h2>{this.state.error}</h2>}
        <MovieDetails movieData={movieData} />
      </div>
    );
  }
}

export default withRouter(MovieDetailsPage);
