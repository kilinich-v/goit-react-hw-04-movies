import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageButton from '../PageButton';

export default class MoviesPage extends Component {

  render() {
    const { moviesData, onClick } = this.props;

    const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
      <div>
        {moviesData && (
          <>
            <ul>
              {moviesData.map(({ poster_path, original_title, title, id }) => {
                return (
                  <li key={id}>
                    <img
                      src={posterBaseUrl + poster_path}
                      alt={original_title}
                    />
                    <h3>{title}</h3>
                  </li>
                );
              })}
            </ul>
            <PageButton onClick={onClick} />
          </>
        )}
      </div>
    );
  }
}
