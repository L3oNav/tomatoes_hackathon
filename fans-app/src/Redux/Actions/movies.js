import axios from 'axios';
const baseURI = 'https://api.themoviedb.org/3/'

export const discoverMovies = () => dispatch => {
  dispatch({
    type: "discoverMovies"
    loading: true
  })
  //TODO: request to movies discover 
}
