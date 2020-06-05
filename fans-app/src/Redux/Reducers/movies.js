
const initialState = {
  loading: false,
  error: {
    status: false
  },
  movies: [],
  movie: {}
}

export const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
		// MoviesList
		case "getMoviesLoading":
				return {
					...state,
					loading: true,
					error: {
						status: false,
						message: ''
					},
					movies: []
				}
		case "getMoviesLoading":
			return {
				...state,
				loading: true,
				error: {
					status: false,
					message: ''
				},
				movies: []
			}
		case "getMoviesSuccess":
			return {
				...state,
				loading: false,
				error: {
					status: false,
					message: ''
				},
				movies: action.payload
			}
		// Movie Detail
		case "getMovieLoading":
			return {
				...state,
				loading:true,
				error: { status: false, message: '' },
				movie: []
			}
		case "getMovieError":
			return {
				...state,
				loading: false,
				error: { status: false, message: action.payload },
				movie: []
			}
		case "getMovieSuccess":
			return {
				...state,
				loading: false,
				error: { status: false, message: ''},
				movie: action.payload
			}
		default:
			return state;
    }
}
