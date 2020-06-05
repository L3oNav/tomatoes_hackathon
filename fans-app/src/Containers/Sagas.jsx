import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../Components/Footer'
import Card from '../Components/Card'

import styled from 'styled-components'
import withAuth from '../routes/withAuth'

const Sagas = () => {
    // if (blog == null) return null
    return (
        <>
            <Container>
                <CardsContainer>
                    <Link key={0} to={`/sagas/23412341234234`}>
                        <Card
                            title={'Star Wars'}
                            img={
                                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/500px-Star_Wars_Logo.svg.png'
                            }
                        />
                    </Link>
                    <Link key={0} to={`/blogs/`}>
                        <Card
                            title={'Harry Potter'}
                            img={'https://i.pinimg.com/originals/d2/f4/c1/d2f4c1d25c462f750e8a8e0d2c67a6e5.jpg'}
                        />
                    </Link>
                    <Link key={0} to={`/blogs/`}>
                        <Card title={'Avengers'} img={'https://i.ytimg.com/vi/fI_CqtIr2hg/maxresdefault.jpg'} />
                    </Link>
                    <Link key={0} to={`/blogs/`}>
                        <Card
                            title={'Lord of the Rings'}
                            img={
                                'https://www.ecestaticos.com/image/clipping/1200/900/698c7567d713c5d0db2dd3af7c2d658f/las-claves-de-la-segunda-edad-el-escenario-de-la-nueva-serie-de-039-el-senor-de-los-anillos-039.jpg'
                            }
                        />
                    </Link>
                </CardsContainer>
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.div`
    background-color: #162447;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
`

const CardsContainer = styled.div`
    z-index: 0;
    width: 100%;
    padding-top: 100px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export default withAuth((session) => session && session.getCurrentUser)(Sagas)
