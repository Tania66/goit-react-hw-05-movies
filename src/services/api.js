import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '4eede4a470802f6f0ed7ee55539b1602';

export const fetchTrending = async () => {
  return (await axios.get(`trending/movie/day?api_key=${API_KEY}`)).data;
};

export const searchFilms = async query => {
  return (
    await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
    )
  ).data;
};

export const movieDetails = async id => {
  return (await axios.get(`movie/${id}?api_key=${API_KEY}`)).data;
};

export const moviesCredits = async id => {
  return (await axios.get(`movie/${id}/credits?api_key=${API_KEY}`)).data;
};

export const moviesReviews = async id => {
  return (await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`)).data;
};
