import React, { Component } from 'react';
import movieApi from '../../servises/movieApi';

export default class ReviewsView extends Component {
  state = {
    reviewsData: [],
    error: '',
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    movieApi
      .getReviews(movieId)
      .then(({ data }) => this.setState({ reviewsData: data.results }))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    const { reviewsData } = this.state;

    return (
      <div>
        {this.state.error && <h1>{this.state.error}</h1>}
        {!this.state.error && (
          <ul>
            {reviewsData.map(({ author, content, id }) => {
              return (
                <li key={id}>
                  <h2>Author: {author}</h2>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
