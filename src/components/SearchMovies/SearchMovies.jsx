import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchMovies extends Component {
  state = {
    input: '',
  };

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.setState({ input: this.props.query });
    }
  }

  handleInput = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          value={this.state.input}
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          onChange={this.handleInput}
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label"></span>
        </button>
      </form>
    );
  }
}

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
