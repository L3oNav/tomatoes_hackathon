//? Redux
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

//? Reducers
import { moviesReducer } from "./Reducers/movies";
import { movieReducer } from "./Reducers/movie";
import { castReducer } from "./Reducers/cast";

const reducers = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  cast: castReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
