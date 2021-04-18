import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import CircularProgress from '@material-ui/core/CircularProgress';
import movieApi from '../servises/movieApi';
import MoviesPage from '../components/MoviesPage';
import SearchMovies from '../components/SearchMovies';

export default class MoviesFindView extends Component {
  state = {
    moviesData: [],
    currentPage: 1,
    query: '',
    error: '',
    isLoading: false,
  };

  changePage = () => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 };
    });
  };

  changeQuery = newQuery => {
    this.setState({ currentPage: 1 });
    this.setState({ query: newQuery });
  };

  componentDidMount() {
    const parsedQuery = queryString.parse(this.props.location.search);

    parsedQuery.query && this.setState({ query: parsedQuery.query });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query === '') return;

    //Fetch new page
    if (this.state.currentPage !== prevState.currentPage) {
      movieApi
        .getMovieFromQuery(this.state.query, this.state.currentPage)
        .then(data =>
          this.setState(prev => {
            return {
              isLoading: true,
              moviesData: [...prev.moviesData, ...data],
            };
          }),
        )
        .catch(err => this.setState({ error: err.message }))
        .finally(() =>
          this.setState({
            isLoading: false,
          }),
        );
    }

    if (this.state.query !== prevState.query) {
      this.setState({ moviesData: [] });

      movieApi
        .getMovieFromQuery(this.state.query, this.state.currentPage)
        .then(data =>
          this.setState(prev => {
            return {
              isLoading: true,
              moviesData: [...prev.moviesData, ...data],
            };
          }),
        )
        .catch(err => this.setState({ error: err.message }))
        .finally(() =>
          this.setState({
            isLoading: false,
          }),
        );

      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${this.state.query}`,
      });
    }
  }

  render() {
    return (
      <div>
        <SearchMovies onSubmit={this.changeQuery} query={this.state.query} />
        <MoviesPage
          moviesData={this.state.moviesData}
          onClick={this.changePage}
          url={this.props.match.url}
        />
        {this.state.isLoading && (
          <div className="spinner">
            <CircularProgress />
          </div>
        )}
      </div>
    );
  }
}
