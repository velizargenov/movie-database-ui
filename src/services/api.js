import axios from 'axios'
import keys from '../config/keys'

const base = keys.base
const token = keys.token

function makeRequest (url, params, result) {
  return axios.get(url, { params: params })
  .then(response => response.data)
  .catch(error => console.log(error))
}

function fetchPopularMovies () {
  const url = `${base}/discover/movie`
  const params = {api_key: token, language: 'en-US', sort_by: 'popularity.desc'}
  return makeRequest(url, params)
}

function fetchMovieDetails (movieId) {
  const url = `${base}/movie/${movieId}`
  const params = {api_key: token}
  return makeRequest(url, params)
}

export { fetchPopularMovies, fetchMovieDetails }
