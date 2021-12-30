import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

const MovieDetails = ({ movieData, location }) => {
  const { image, title, id } = movieData;

  return (
    <div className="movie">
      <h1 className="movie__title">{title}</h1>
      <div className="movie__block-title">
        <img className="movie__img" src={image} alt={title} />
      </div>
      <div id="yohoho" data-title={title} data-videospider_tv="0"></div>
      <div className="movie__block-add">
        <p className="movie__text">Additional information</p>
        <ul className="movie__add">
          <li>
            <Link
              to={{
                pathname: `/movies/${id}/cast`,
                state: {
                  from: location?.state?.from,
                },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/movies/${id}/reviews`,
                state: {
                  from: location?.state?.from,
                },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Route path={routes.cast} component={Cast} />
      <Route path={routes.reviews} component={Reviews} />
    </div>
  );
};

export default withRouter(MovieDetails);

MovieDetails.propTypes = {
  movieData: PropTypes.object.isRequired,
};
