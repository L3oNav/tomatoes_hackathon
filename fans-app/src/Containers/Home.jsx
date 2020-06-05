import React from 'react'
import Footer from '../components/Footer'
import homeLogo from '../assets/static/MHmexico.png'
import styled from 'styled-components'

const Home = () => {
    return (
        <>
            <Container>
                <Image src={homeLogo} alt='Logo' />
                <Title>¿Tienes una idea brillante en el mundo de la biomédicina?</Title>
                <SubTitle>
                    Encontrarás blogs de proyectos con nuevas técnicas en computación en conjunto
                    con electrónica para generar soluciones en México y el mundo.
                </SubTitle>
                <Footer />
            </Container>
        </>
    )
}

const Container = styled.div`
    background-color: #232323;
    margin-top: 50px;
    min-height: 100vh;
`
const Title = styled.p`
    color: white;
    margin: 30px;
    font-size: 40px;
`
const SubTitle = styled.p`
    color: white;
    margin: 30px;
    font-size: 30px;
`

const Image = styled.img`
    margin-top: 100px;
    width: 300px;
    height: 80px;
`

export default Home
