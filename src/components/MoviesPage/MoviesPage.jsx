import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageButton from '../PageButton';

class MoviesPage extends Component {
  render() {
    const { moviesData, onClick, location } = this.props;

    const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
      <>
        {!!moviesData.length && (
          <>
            <ul className="moviesList">
              {moviesData.map(({ poster_path, original_title, title, id }) => {
                return (
                  <li key={id} className="moviesList__item">
                    <Link
                      to={{
                        pathname: `/movies/${id}`,
                        state: {
                          from: location,
                        },
                      }}
                    >
                      <img
                        src={posterBaseUrl + poster_path}
                        alt={original_title}
                        className="moviesList__img"
                      />
                      <h3 className="moviesList__title">{title}</h3>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <PageButton onClick={onClick} />
          </>
        )}
      </>
    );
  }
}

export default withRouter(MoviesPage);

MoviesPage.propTypes = {
  moviesData: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};
