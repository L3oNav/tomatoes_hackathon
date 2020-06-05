import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { store } from "./Redux/index"
import DiscoverMovies from './Components/discoverMovies/index.js'
import './assets/styles/index.scss'
import App from './routes/App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Root from './routes/App'
const serverUri =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3500/graphql'
        : 'https://team-50-tomatoes-server.now.sh/graphql'

const client = new ApolloClient({
    uri: serverUri,
    fetchOptions: {
        credentials: 'include',
    },
    request: (operation) => {
        const token = localStorage.getItem('token')
        operation.setContext({
            headers: {
                authorization: token,
            },
        })
    },
    onError: ({ networkError }) => {
        if (networkError) {
            console.log('Network Error', networkError)

            // if (networkError.statusCode === 401) {
            //     localStorage.removeItem('token')
            // }
        }
    },
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
        <Root/>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
