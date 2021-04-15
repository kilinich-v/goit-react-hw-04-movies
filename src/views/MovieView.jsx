import React from 'react'

export default function MovieView({ poster_path, title, genres, overview, vote_average }) {
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <div>
      <button>Go back</button>
      <img src={posterBaseUrl + poster_path} alt={title} />
      <h1>{title}</h1>
      <p>{vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <ul>
        {genres.map(({ name }) => {
          return <li>{name}</li>;
        })}
      </ul>

      <p>Additional information</p>
      <ul>
        <li>Cast</li>
        <li>Reviews</li>
      </ul>
    </div>
  );
}
