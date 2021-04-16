import React from 'react';
import { Link, Route } from 'react-router-dom';
import routes from '../../routes';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

const MovieDetails = ({ movieData }) => {
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const { poster_path, title, genres, overview, vote_average, id } = movieData;

  return (
    <>
      <img src={posterBaseUrl + poster_path} alt={title} />
      <h1>{title}</h1>
      <p>{vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <ul>
        {genres &&
          genres.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
      </ul>

      <p>Additional information</p>
      <ul>
        <li>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        </li>
      </ul>

      <Route path={routes.cast} component={Cast} />
      <Route path={routes.reviews} component={Reviews} />
    </>
  );
};

export default MovieDetails;
