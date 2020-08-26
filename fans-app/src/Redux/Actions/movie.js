import { URL_DETAIL, API_KEYI } from "../const";

export const movieGetAction = (id) => async (dispatch) => {
  dispatch({ type: "movieGetLoading" });
  return fetch(URL_DETAIL + id + API_KEY)
    .then((response) => response.json())
    .then((json) =>
      dispatch({
        type: "movieGetSuccess",
        payload: json,
      })
    )
    .catch((error) =>
      dispatch({
        type: "movieGetError",
        payload: error,
      })
    );
};
