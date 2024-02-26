// import http from "./httpService";
// // import apiUrl from "../config.json";

// export function getGenres() {
//   return http.get("http://localhost:3900/api/genres");
// }

import http from "./httpService";
import config from "../config.json";

export function getGenres() {
  return http.get(config.apiUrl + "/genres");
}
