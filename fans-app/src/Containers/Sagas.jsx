import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-apollo'
import CircularProgress from '@material-ui/core/CircularProgress'
import { GET_SAGAS_REACTIONS } from '../queries/index'
import { makeStyles } from '@material-ui/core/styles'

import Footer from '../Components/Footer'
import Card from '../Components/Card'
import ReactionsContainer from '../Components/ReactionsContainer'

import styled from 'styled-components'
import withAuth from '../routes/withAuth'

const Sagas = () => {
    const classes = useStyles()
    const [sagasReactionsData, setSagasReactionsData] = useState([])

    const { loading } = useQuery(GET_SAGAS_REACTIONS, {
        onCompleted: (data) => {
            setSagasReactionsData(data.getSagas)
        },
    })

    if (loading)
        return (
            <div className={classes.circular}>
                <CircularProgress className={classes.progress} />
            </div>
        )
    return (
        <>
            <Container>
                <CardsContainer>
                    <CardAndReactionsContainer>
                        <Link key={0} to={`/sagas/23412341234234`}>
                            <Card
                                title={'Star Wars'}
                                img={
                                    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/500px-Star_Wars_Logo.svg.png'
                                }
                            />
                        </Link>
                        <ReactionsContainer showNumbers={true} isClickable={true} value={sagasReactionsData[0]} />
                    </CardAndReactionsContainer>
                    <CardAndReactionsContainer>
                        <Link key={0} to={`/blogs/`}>
                            <Card
                                title={'Harry Potter'}
                                img={'https://i.pinimg.com/originals/d2/f4/c1/d2f4c1d25c462f750e8a8e0d2c67a6e5.jpg'}
                            />
                        </Link>
                        <ReactionsContainer showNumbers={true} isClickable={true} value={sagasReactionsData[1]} />
                    </CardAndReactionsContainer>
                    <CardAndReactionsContainer>
                        <Link key={0} to={`/blogs/`}>
                            <Card title={'Avengers'} img={'https://i.ytimg.com/vi/fI_CqtIr2hg/maxresdefault.jpg'} />
                        </Link>
                        <ReactionsContainer showNumbers={true} isClickable={true} value={sagasReactionsData[2]} />
                    </CardAndReactionsContainer>
                    <CardAndReactionsContainer>
                        <Link key={0} to={`/blogs/`}>
                            <Card
                                title={'Lord of the Rings'}
                                img={
                                    'https://www.ecestaticos.com/image/clipping/1200/900/698c7567d713c5d0db2dd3af7c2d658f/las-claves-de-la-segunda-edad-el-escenario-de-la-nueva-serie-de-039-el-senor-de-los-anillos-039.jpg'
                                }
                            />
                        </Link>
                        <ReactionsContainer showNumbers={true} isClickable={true} value={sagasReactionsData[3]} />
                    </CardAndReactionsContainer>
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

const CardAndReactionsContainer = styled.div`
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
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 150,
        marginLeft: '10%',
        marginRight: '10%',
    },
    paper: {
        backgroundColor: '#1f4068',
        textAlign: 'center',
        margin: 'auto',
        height: 420,
    },
    paperTabs: {
        marginBottom: 20,
        borderRadius: 3,
        backgroundColor: '#1f4068',
        color: 'white',
        right: 0,
    },
    profilePaper: {
        backgroundColor: '#1f4068',
        textAlign: 'center',
        alignItems: 'center',
        margin: 'auto',
        height: 'auto',
        color: 'white',
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    saveProfilePaper: {
        backgroundColor: '#1f4068',
        textAlign: 'center',
        alignItems: 'center',
        margin: 'auto',
        height: 'auto',
        color: 'white',
    },
    universityTypo: {
        margonTop: 5,
    },
    circular: {
        background: '#232323',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
    },
    progress: {
        color: 'white',
    },
    formTextField: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            marginTop: 20,
            width: 200,
        },
    },
    textField: {
        color: 'white',
    },
    saveButtonProfile: {
        marginTop: 20,
        marginBottom: 20,
    },
    deleteImageButton: {
        marginTop: 20,
        marginBottom: 20,
    },
}))

export default withAuth((session) => session && session.getCurrentUser)(Sagas)
