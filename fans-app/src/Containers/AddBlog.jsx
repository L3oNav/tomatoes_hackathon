import React from 'react'
import AddBlogForm from '../Components/AddBlogForm'
import Footer from '../Components/Footer'
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
