
const initialState = {
  loading: false,
  movie: {},
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "movieGetLoading":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "movieGetError":
      return {
        ...state,
        error: true,
        loading: false,
        message: action.payload,
      };
    case "movieGetSuccess":
      return {
        ...state,
        loading: false,
        error: false,
        movie: action.payload,
      };
    default:
      return state;
  }
};
