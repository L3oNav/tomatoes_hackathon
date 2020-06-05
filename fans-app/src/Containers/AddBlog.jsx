import React from 'react'
import AddBlogForm from '../components/AddBlogForm'
import Footer from '../components/Footer'
import styled from 'styled-components'
import withAuth from '../routes/withAuth'

const AddBlog = ({ session }) => {
    return (
        <>
            <Container>
                <AddBlogForm session={session} />
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

export default withAuth((session) => session && session.getCurrentUser)(AddBlog)
