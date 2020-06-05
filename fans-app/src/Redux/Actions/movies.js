import axios from 'axios';
import {URL_LIST, API_KEY} from '../const'
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
