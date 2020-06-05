import axios from 'axios';
import {URL_LIST, API_KEY, URL_DETAIL} from '../const'

export const discoverMoviesAction = () => async (dispatch) => {
  dispatch({
    type: "getMoviesLoading",
    payload: true
  })
  //TODO: request to movies discover

  try {
    const response = await axios.get(URL_LIST + API_KEY)
    dispatch({
      type: "getMoviesSuccess",
      payload: response.data
    })
  }
  catch(err){
    dispatch({
      type: "getMoviesError",
      payload: err.message
    })
  }
}
export const detailMovieAction = (id) => async(dispatch) => {
  dispatch(
    { type:"getMovieLoading" }
  )
  try {
    const response = await axios.get(URL_DETAIL + id + API_KEY)
    dispatch(
      {
        type:"getMovieSuccess",
        payload: response.data
      }
    )
  }
  catch (err) {
    dispatch({
      type: "getMovieError",
      payload: err.message
    })
  }
}