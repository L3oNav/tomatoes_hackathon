import { gql } from 'apollo-boost'

/* Blogs  Queries */
export const GET_BLOGS = gql`
    query getBlogs {
        getBlogs {
            id
            title
            subtitle
            description
            body
            images
            developers
        }
    }
`

export const GET_SORTED_BLOGS = gql`
    query getSortedBlogs {
        getSortedBlogs {
            id
            title
            subtitle
            description
            body
            images
            developers
        }
    }
`

export const GET_BLOGS_NAMES = gql`
    query getSortedBlogs {
        getSortedBlogs {
            id
            name
            images
        }
    }
`

export const GET_BLOG = gql`
    query($_id: ID!) {
        getBlog(_id: $_id) {
            id
            name
            title
            subtitle
            body
            images
            likes
            createdDate
            developers
            description
        }
    }
`

/* Blogs Mutations */
export const ADD_BLOG = gql`
    mutation(
        $name: String!
        $title: String!
        $subtitle: String!
        $description: String!
        $body: String!
        $developers: [String]!
        $images: [String]
    ) {
        addBlog(
            name: $name
            title: $title
            subtitle: $subtitle
            description: $description
            body: $body
            developers: $developers
            images: $images
        ) {
            id
            name
            title
            subtitle
            description
            body
            developers
            images
            createdDate
            likes
        }
    }
`

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

export const UPDATE_USER_BLOG = gql`
    mutation(
        $_id: ID!
        $name: String!
        $title: String!
        $subtitle: String
        $body: String!
        $description: String!
        $images: [String]
    ) {
        updateUserBlog(
            _id: $_id
            name: $name
            title: $title
            subtitle: $subtitle
            body: $body
            description: $description
            images: $images
        ) {
            id
            name
            title
            subtitle
            body
            description
            images
        }
    }
`

/* Projects  Queries */
export const GET_PROJECTS = gql`
    query getProjects {
        getProjects {
            id
            title
            subtitle
            body
            images
            likes
            createdDate
            developers
        }
    }
`

export const GET_PROJECT = gql`
    query($_id: ID!) {
        getProject(_id: $_id) {
            id
            name
            title
            subtitle
            body
            images
            likes
            createdDate
            developers
            description
        }
    }
`

export const GET_PROJECTS_NAMES = gql`
    query getSortedProjects {
        getSortedProjects {
            id
            name
            images
        }
    }
`

export const SEARCH_PROJECTS = gql`
    query($searchTerm: String) {
        searchProjects(searchTerm: $searchTerm) {
            id
            name
            likes
        }
    }
`

/* Projects  Mutations */
export const ADD_PROJECT = gql`
    mutation(
        $name: String!
        $title: String!
        $subtitle: String!
        $description: String!
        $body: String!
        $developers: [String]!
        $images: [String]
    ) {
        addProject(
            name: $name
            title: $title
            subtitle: $subtitle
            description: $description
            body: $body
            developers: $developers
            images: $images
        ) {
            id
            name
            title
            subtitle
            description
            body
            developers
            images
            createdDate
            likes
        }
    }
`

export const DELETE_USER_PROJECT = gql`
    mutation($_id: ID!) {
        deleteUserProject(_id: $_id) {
            id
        }
    }
`

export const UPDATE_USER_PROJECT = gql`
    mutation(
        $_id: ID!
        $name: String!
        $title: String!
        $subtitle: String
        $body: String!
        $description: String!
        $images: [String]
    ) {
        updateUserProject(
            _id: $_id
            name: $name
            title: $title
            subtitle: $subtitle
            body: $body
            description: $description
            images: $images
        ) {
            id
            name
            title
            subtitle
            body
            description
            images
        }
    }
`

export const UPDATE_DEVELOPERS_PROJECT = gql`
    mutation($_id: ID!, $developers: [String]!) {
        updateDevelopersProject(_id: $_id, developers: $developers) {
            id
            developers
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
