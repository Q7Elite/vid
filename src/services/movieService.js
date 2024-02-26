import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/movies";

export function getGenres() {
  return http.get(config.apiUrl + "/genres");
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(apiEndpoint + "/" + movie._id, body);
  }
  return http.post(apiEndpoint, movie);
}

export function getMovie(movieId) {
  return http.get(apiEndpoint + "/" + movieId);
}

export function deleteMovie(movieId) {
  return http.delete(apiEndpoint + "/" + movieId);
}
