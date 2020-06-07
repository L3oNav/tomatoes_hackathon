import axios from 'axios';
import {API_KEY, URL_DETAIL} from '../const'



export const castsMovieAction = (id) => async(dispatch) => {
    dispatch(
      { type:"getCastLoading" }
    )
    try {
      const response = await axios.get(URL_DETAIL + id + '/credits' + API_KEY)
      dispatch(
        {
          type:"getCastSuccess",
          payload: [response.data.cast]
        }
      )
    }
    catch (err) {
      dispatch({
        type: "getCastError",
        payload: err.message
      })
    }
  }