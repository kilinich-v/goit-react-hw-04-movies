import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageButton from '../PageButton';

class MoviesPage extends Component {
  render() {
    const { moviesData, onClick, location } = this.props;

    const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
      <div>
        {!!moviesData.length && (
          <>
            <ul>
              {moviesData.map(({ poster_path, original_title, title, id }) => {
                return (
                  <li key={id}>
                    <Link
                      to={{
                        pathname: `/movies/${id}`,
                        state: {
                          from: location
                        }
                      }}
                    >
                      <img
                        src={posterBaseUrl + poster_path}
                        alt={original_title}
                      />
                      <h3>{title}</h3>
                    </Link>
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

export default withRouter(MoviesPage);