import axios from 'axios';

const AUTH_TOKEN = 'ecafb96f29eb9b2017ec13981edc2764';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getTrendingMovie(currentPage) {
    return axios
      .get(`/trending/movie/week?api_key=${AUTH_TOKEN}&page=${currentPage}`)
      .then(movies => movies.data.results);
  },

  getMovie(movie_id) {
    return axios
      .get(`/movie/${movie_id}?api_key=${AUTH_TOKEN}`)
      .then(movie => movie);
  },

  getMovieFromQuery(query, currentPage) {
    return axios
      .get(
        `/search/movie?api_key=${AUTH_TOKEN}&query=${query}&page=${currentPage}`,
      )
      .then(movies => movies.data.results);
  },

  getReviews(movieId) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${AUTH_TOKEN}`,
    );
  },

  getCast(movieId) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${AUTH_TOKEN}`,
    );
  },
};
