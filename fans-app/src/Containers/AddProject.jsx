import React from 'react'
import AddProjectForm from '../components/AddProjectForm'
import Footer from '../components/Footer'
import styled from 'styled-components'
import withAuth from '../routes/withAuth'

const AddProject = ({ session }) => {
    return (
        <>
            <Container>
                <AddProjectForm session={session} />
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
    margin-top: 70px;
    background-color: #232323;
    min-height: 100vh;
`

export default withAuth((session) => session && session.getCurrentUser)(AddProject)
