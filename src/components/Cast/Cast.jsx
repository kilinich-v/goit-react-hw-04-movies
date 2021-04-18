import React, { Component } from 'react';
import movieApi from '../../servises/movieApi';

export default class CastView extends Component {
  state = {
    castData: [],
    error: '',
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    movieApi
      .getCast(movieId)
      .then(({ data }) => this.setState({ castData: data.cast }))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    const { castData } = this.state;
    const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
      <div>
        <ul className="cast">
          {castData.map(({ profile_path, name, character, id }) => {
            return (
              <li key={id} className="cast__item">
                <img
                  className="cast__img"
                  src={posterBaseUrl + profile_path}
                  alt={name}
                />
                <h3 className="cast__name">{name}</h3>
                <p className="cast__character">Character: {character}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
