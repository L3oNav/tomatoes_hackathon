import { URL_LIST, API_KEY, URL_DETAIL } from "../const";

export const moviesDiscoverAction = (page = 1) => async (dispatch) => {
  dispatch({ type: "discoverMoviesLoading" });
  return fetch(URL_LIST + API_KEY + "&page=" + page)
    .then((response) => response.json())
    .then((json) => json.results)
    .then((data) => {
      return dispatch({
        type: "discoverMoviesSuccess",
        payload: data,
      });
    })
    .catch((error) => {
      return dispatch({
        type: "discoverMoviesError",
        payload: error,
      });
    });
};
