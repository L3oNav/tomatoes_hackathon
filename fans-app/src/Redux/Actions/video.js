import {URL_DETAIL, URL_VIDEO, API_KEY} from '../const'

export const moviesVideosAction = id => dispatch => {
    dispatch({ type: "movieVideoLoading" });
    fetch(URL_DETAIL + id + URL_VIDEO + API_KEY)
    .then(response => response.json())
    .then(json=> {
        return dispatch({
            type: 'movieVideoSuccess',
            payload: json
        })
    })
    .catch((err) =>
      dispatch({
        type: "movieVideoError",
        payload: err,
      })
    );
}