
const initialState = {
  loading: false,
  error: {
    status: false
  },
  movies: []
}

export const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
		case "getMoviesSuccess":
			return {
				...state,
				loading: false,
				error: {
					status: false
				},
				movies: action.payload
			}
		case "getMoviesError":
			return {
				...state,
				loading: false,
				error: {
					status: true,
					message: action.payload
				}
			}
		case "getMoviesLoading":
			return {
				...state,
				loading: true,
				error: {
					status: false,
					message: action.payload
				}
			}
		default:
			return state;
    }
}
