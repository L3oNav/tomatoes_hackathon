import React from 'react'
import Footer from '../Components/Footer'
// import homeLogo from '../assets/static/MHmexico.png'
import styled from 'styled-components'
import DiscoverMovies from '../Components/discoverMovies/index'

const Home = () => {
    return (
        <Container>
            <DiscoverMovies/>
        </Container>
    )
}

const Container = styled.div`
    background-color: #162447;
    margin-top: 70px;
    min-height: 100vh;
`
const Title = styled.p`
    color: white;
    padding-top: 70px;
    margin: 30px;
    font-size: 40px;
`
const SubTitle = styled.p`
    color: white;
    margin: 30px;
    font-size: 30px;
`

// const Image = styled.img`
//     margin-top: 100px;
//     width: 300px;
//     height: 80px;
// `

export default Home
