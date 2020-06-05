import axios from 'axios'

const initialState = {
  loading: false,
  error: false, 
  movies: []
}

export const moviesReducer = (state = initialState, action) => {
    switch(action.type){
      case "getMovies":
	return {
	  ...state,
	  loading: false,
	  error: '',
	  movies: action.payload,
	}
      default:
	return state;
    }
}
