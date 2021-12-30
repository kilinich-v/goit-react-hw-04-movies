import React, { Component } from 'react';

import imdbApi from '../servises/imdbApi';
import MoviesPage from '../components/MoviesPage';

export default class HomeView extends Component {
  state = {
    moviesData: {},
    currentPage: 1,
    error: '',
  };

  changePage = () => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    //Fetch new page
  }

  componentDidMount() {
    imdbApi
      .getTop()
      .then(data => this.setState({ moviesData: data }))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    const { error } = this.state;
    return (
      <div>
        {error && <h2>{error}</h2>}
        <MoviesPage
          moviesData={this.state.moviesData}
          onClick={this.changePage}
        />
      </div>
    );
  }
}
