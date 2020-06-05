import React from 'react'
import { withRouter } from 'react-router-dom'
import { ApolloConsumer } from 'react-apollo'
import styled from 'styled-components'

const handleLogOut = (client, history) => {
    localStorage.setItem('token', '')
    client.resetStore()
    history.push('/')
}

const LogOut = ({ history }) => {
    return (
        <>
            <ApolloConsumer>
                {(client) => {
                    return (
                        <LogOutButton onClick={() => handleLogOut(client, history)}>
                            Cerrar sesión
                        </LogOutButton>
                    )
                }}
            </ApolloConsumer>
        </>
    )
}

const LogOutButton = styled.p`
    color: #232323;
    cursor: pointer;
    margin: 0;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 15px;
    &:hover {
        background-color: rgb(221, 221, 221);
    }
`

export default withRouter(LogOut)
