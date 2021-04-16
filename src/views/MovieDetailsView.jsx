import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import movieApi from '../servises/movieApi';
import MovieDetails from '../components/MovieDetails';


export default class MovieDetailsPage extends Component {
  state = {
    movieData: {},
    error: '',
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    movieApi
      .getMovie(movieId)
      .then(({ data }) => this.setState({ movieData: data }))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    const { movieData } = this.state;
    const { location } = this.props;

    return (
      <div>
        <button type="button" onClick={()=> this.props.history.push(location.state.from.pathname)}>Go back</button>
        {this.state.error && <h2>{this.state.error}</h2>}
        <MovieDetails movieData={movieData} />
        
      </div>
    );
  }
}
