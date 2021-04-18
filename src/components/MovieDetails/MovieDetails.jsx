import React from 'react';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

const MovieDetails = ({ movieData }) => {
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const { poster_path, title, genres, overview, vote_average, id } = movieData;

  return (
    <div className="movie">
      <h1 className="movie__title">{title}</h1>
      <div className="movie__block-title">
        <img
          className="movie__img"
          src={posterBaseUrl + poster_path}
          alt={title}
        />
        <p className="movie__text">{vote_average}</p>
      </div>
      <div className="movie__block-overview">
        <h2 className="movie__subtitle">Overview</h2>
        <p className="movie__text">{overview}</p>
        <h2 className="movie__subtitle">Genres</h2>
        <ul className="movie__genres">
          {genres &&
            genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
        </ul>
      </div>

      <div className="movie__block-add">
        <p className="movie__text">Additional information</p>
        <ul className="movie__add">
          <li>
            <Link to={`/movies/${id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Route path={routes.cast} component={Cast} />
      <Route path={routes.reviews} component={Reviews} />
    </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movieData: PropTypes.array.isRequired,
};
