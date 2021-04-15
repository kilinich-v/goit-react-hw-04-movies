import React, { Component } from 'react'
import PropTypes from 'prop-types'
import movieApi from '../servises/movieApi';
import MoviesPage from '../components/MoviesPage';
import SearchMovies from '../components/SearchMovies';

export default class MoviesFindView extends Component {
  state = {
    moviesData: [],
    currentPage: 1,
    query: '',
    error: '',
  };

  changePage = () => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 };
    });
  };

  changeQuery = newQuery => {
      this.setState({ query: newQuery });
      
      console.log(this.state.query);
  };

  componentDidUpdate(prevProps, prevState) {
    //Fetch new page
    if (this.state.currentPage !== prevState.currentPage) {
      movieApi
        .getMovieFromQuery(this.state.query, this.state.currentPage)
        .then(data =>
          this.setState({ moviesData: [...prevState.moviesData, ...data] }),
        )
        .catch(err => this.setState({ error: err.message }));
      }
      
      if (this.state.query !== prevState.query) {
        movieApi
          .getMovieFromQuery(this.state.query, this.state.currentPage)
          .then(data =>
            this.setState({ moviesData: [...prevState.moviesData, ...data] }),
          )
          .catch(err => this.setState({ error: err.message }));
      }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <SearchMovies onSubmit={this.changeQuery} />
        <MoviesPage
          moviesData={this.state.moviesData}
          onClick={this.changePage}
        />
      </div>
    );
  }
}
