import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
          <ul>
            {castData.map(({ profile_path, name, character, id }) => {
              return (
                <li key={id}>
                  <img
                    src={posterBaseUrl + profile_path}
                    alt={name}
                  />
                  <h3>{name}</h3>
                  <p>Character: {character}</p>
                </li>
              );
            })}
          </ul>
        </div>
      );
  }
}
