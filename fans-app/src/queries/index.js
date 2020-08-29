import { gql } from 'apollo-boost'

// SAGAS Queries and Mutations
export const GET_SAGAS_REACTIONS = gql`
  {
    getSagas {
      id
      like
      hearth
      smile
      surprise
      sad
    }
  }
`

export const UPDATE_SAGAS_REACTIONS = gql`
  mutation(
    $_id: ID!
    $like: Int!
    $hearth: Int!
    $smile: Int!
    $surprise: Int!
    $sad: Int!
  ) {
    updateSaga(
      _id: $_id
      like: $like
      hearth: $hearth
      smile: $smile
      surprise: $surprise
      sad: $sad
    ) {
      id
      like
      hearth
      smile
      surprise
      sad
    }
  }
`

export const ADD_COMMENTARY = gql`
  mutation(
    $movie_id: String!
    $movie_name: String!
    $user: String!
    $text: String
    $emotion: String
  ) {
    addComment(
      movie_id: $movie_id
      movie_name: $movie_name
      user: $user
      text: $text
      emotion: $emotion
    ) {
      id
      movie_id
      movie_name
      user
      text
      emotion
    }
  }
`

// TODO - Add query to search movies
export const SEARCH_BLOGS = gql`
  query($searchTerm: String) {
    searchBlogs(searchTerm: $searchTerm) {
      id
      name
      likes
    }
  }
`

export const UPDATE_USER = gql`
  mutation(
    $_id: ID!
    $name: String!
    $username: String!
    $email: String!
    $fav: String
    $role: String!
  ) {
    updateUser(
      _id: $_id
      name: $name
      username: $username
      email: $email
      fav: $fav
      role: $role
    ) {
      id
      name
      username
      email
      fav
      role
    }
  }
`

/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      username
      email
      role
    }
  }
`

export const GET_USER = gql`
  query($username: String, $email: String) {
    getUser(username: $username, email: $email) {
      id
      name
      username
      email
      university
      specialty
      experiencePoints
      fav
    }
  }
`

export const GET_MOVIE_COMMENTARIES = gql`
  query($movie_id: String) {
    getMovieCommentaries(movie_id: $movie_id) {
      id
      user
      text
    }
  }
`

/* User Mutations */

export const SIGNIN_USER = gql`
  mutation($username: String, $email: String, $password: String!) {
    signInUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`

export const SIGNUP_USER = gql`
  mutation($name: String!, $username: String!, $email: String!, $password: String!) {
    signUpUser(name: $name, username: $username, email: $email, password: $password) {
      token
    }
  }
`

export const DELETE_USER_COMMENTARY = gql`
  mutation($_id: ID!) {
    deleteUserCommentary(_id: $_id) {
      id
    }
  }
`
