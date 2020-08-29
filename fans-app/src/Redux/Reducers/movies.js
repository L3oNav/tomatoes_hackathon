const initialState = {
  movies: [],
  loading: false,
  error: false,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    // Movies discover
    case "discoverMoviesLoading":
      return {
        ...state,
        loading: true,
        error: false,
        movies: [],
      };

    case "discoverMoviesError":
      return {
        error: {
          ...state,
          loading: false,
          error: true,
          message: action.payload,
        },
      };
    case "discoverMoviesSuccess":
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
};
