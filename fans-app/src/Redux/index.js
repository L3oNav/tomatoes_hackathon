//? Redux
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//? Reducers
import { reducers } from "./Reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
)
