const initialState = {
  loading: true,
  error: false,
  cast: [],
};

export const castReducer = (state = initialState, action) => {
  switch (action.type) {
    case "castMovieLoading":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "castMovieError":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "castMovieSuccess":
      return {
        ...state,
        error: false,
        loading: false,
        cast: action.payload.cast,
      };
    default:
      return state;
  }
};
