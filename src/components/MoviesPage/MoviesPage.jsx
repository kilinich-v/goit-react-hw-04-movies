import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageButton from '../PageButton';

class MoviesPage extends Component {
  render() {
    const { moviesData, onClick, location } = this.props;

    return (
      <>
        {!!moviesData?.items && (
          <>
            <ul className="moviesList">
              {moviesData.items.map(({ image, title, id }) => {
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
                        src={image}
                        alt={image}
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
