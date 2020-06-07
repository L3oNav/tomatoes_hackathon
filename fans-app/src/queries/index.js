import { gql } from 'apollo-boost'

/* Blogs  Queries */
// export const GET_BLOGS = gql`
//     query getBlogs {
//         getBlogs {
//             id
//             title
//             subtitle
//             description
//             body
//             images
//             developers
//         }
//     }
// `

// export const GET_SORTED_BLOGS = gql`
//     query getSortedBlogs {
//         getSortedBlogs {
//             id
//             title
//             subtitle
//             description
//             body
//             images
//             developers
//         }
//     }
// `

// export const GET_BLOGS_NAMES = gql`
//     query getSortedBlogs {
//         getSortedBlogs {
//             id
//             name
//             images
//         }
//     }
// `

// export const GET_BLOG = gql`
//     query($_id: ID!) {
//         getBlog(_id: $_id) {
//             id
//             name
//             title
//             subtitle
//             body
//             images
//             likes
//             createdDate
//             developers
//             description
//         }
//     }
// `

// /* Blogs Mutations */
// export const ADD_BLOG = gql`
//     mutation(
//         $name: String!
//         $title: String!
//         $subtitle: String!
//         $description: String!
//         $body: String!
//         $developers: [String]!
//         $images: [String]
//     ) {
//         addBlog(
//             name: $name
//             title: $title
//             subtitle: $subtitle
//             description: $description
//             body: $body
//             developers: $developers
//             images: $images
//         ) {
//             id
//             name
//             title
//             subtitle
//             description
//             body
//             developers
//             images
//             createdDate
//             likes
//         }
//     }
// `

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
    mutation($_id: ID!, $like: Int!, $hearth: Int!, $smile: Int!, $surprise: Int!, $sad: Int!) {
        updateSaga(_id: $_id, like: $like, hearth: $hearth, smile: $smile, surprise: $surprise, sad: $sad) {
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
    mutation($movie_id: String!, $user: String!, $text: String!) {
        addComment(movie_id: $movie_id, user: $user, text: $text) {
            id
            movie_id
            user
            text
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

export const DELETE_USER_BLOG = gql`
    mutation($_id: ID!) {
        deleteUserBlog(_id: $_id) {
            id
        }
    }
`

export const UPDATE_USER = gql`
    mutation($_id: ID!, $name: String!, $username: String!, $email: String!, $fav: String) {
        updateUser(_id: $_id, name: $name, username: $username, email: $email, fav: $fav) {
            id
            name
            username
            email
            fav
        }
    }
`

/* User Queries */
export const GET_CURRENT_USER = gql`
    query {
        getCurrentUser {
            username
            email
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
