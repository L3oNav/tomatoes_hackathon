import React from 'react'
import styled from 'styled-components'

const ErrorItem = ({ error }) =>
    error.message === 'GraphQL error: User or Email Already Exist or Password Mismatching' ? (
        <ErrorMessage>
            User or Email Already <br /> Exist or Password <br /> Mismatching
        </ErrorMessage>
    ) : (
        <ErrorMessage>Invalid Username, Email or Password</ErrorMessage>
    )

const ErrorMessage = styled.p`
    color: white;
    align-self: 'center';
    text-justify: 'center';
`

export default ErrorItem
