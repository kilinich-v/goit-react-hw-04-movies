import axios from 'axios';

const AUTH_KEY = 'k_wv206swt';
axios.defaults.baseURL = 'https://imdb-api.com/API';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  async getTop() {
    try {
      const movies = await axios.get(`/Top250Movies/${AUTH_KEY}`);

      return movies.data;
    } catch (error) {
      console.log(error.message);
    }
  },

  async getMovie(movie_id) {
    try {
      const movie = await axios.get(`/SearchMovie/${AUTH_KEY}/${movie_id}`);

      return movie.data;
    } catch (error) {
      console.log(error.message);
    }
  },

  async getMovieFromQuery(query) {
    return await axios
      .get(`/Search/${AUTH_KEY}/${query}`)
      .then(movies => movies.data);
  },

  async getReviews(movieId) {
    return await axios
      .get(`​​/Reviews​/${AUTH_KEY}​/${movieId}`)
      .then(reviews => reviews.data);
  },

  async getCast(movieId) {
    return await axios
      .get(`​/FullCast​/${AUTH_KEY}​/${movieId}`)
      .then(cast => cast.data);
  },
};
