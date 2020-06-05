import axios from 'axios';


export const signUp = () => dispatch => {
  dispatch({
    type: "signUp"
    loading: true
  })
}
