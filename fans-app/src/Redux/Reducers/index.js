import {combineReducers} from 'redux'
import { moviesReducer as MoviesR } from './movies'
//import { usersReducer as UsersR } from './users'


export const reducers = combineReducers({
  //users: UsersR,
  movies: MoviesR
})
