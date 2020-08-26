import { API_KEY, URL_DETAIL } from "../const";

export const movieCastAction = (id) => (dispatch) => {
  dispatch({ type: "castMovieLoading" });
  fetch(URL_DETAIL + id + URL_CAST + API_KEY)
    .then((response) => response.json())
    .then((json) => {
      return dispatch({
        type: "castMovieSuccess",
        payload: json,
      });
    })
    .catch((err) =>
      dispatch({
        type: "castMovieError",
        payload: err,
      })
    );
};
