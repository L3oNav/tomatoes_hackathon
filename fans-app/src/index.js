import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index.scss'
import App from './routes/App'
import * as serviceWorker from './utils/serviceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

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
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
