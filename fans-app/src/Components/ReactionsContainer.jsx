import React from 'react'
import styled from 'styled-components'
import { UPDATE_SAGAS_REACTIONS } from '../queries/index'
import { useMutation } from 'react-apollo'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const ReactionsContainer = ({ showNumbers, isClickable, value }) => {
    const classes = useStyles()

    const _handleOnClick = (type) => {
        if (type === 'like') {
            updateSagaReaction({
                variables: {
                    _id: value.id,
                    like: value.like + 1,
                    hearth: value.hearth,
                    smile: value.smile,
                    surprise: value.surprise,
                    sad: value.sad,
                },
            })
        } else if (type === 'hearth') {
            updateSagaReaction({
                variables: {
                    _id: value.id,
                    like: value.like,
                    hearth: value.hearth + 1,
                    smile: value.smile,
                    surprise: value.surprise,
                    sad: value.sad,
                },
            })
        } else if (type === 'smile') {
            updateSagaReaction({
                variables: {
                    _id: value.id,
                    like: value.like,
                    hearth: value.hearth,
                    smile: value.smile + 1,
                    surprise: value.surprise,
                    sad: value.sad,
                },
            })
        } else if (type === 'surprise') {
            updateSagaReaction({
                variables: {
                    _id: value.id,
                    like: value.like,
                    hearth: value.hearth,
                    smile: value.smile,
                    surprise: value.surprise + 1,
                    sad: value.sad,
                },
            })
        } else if (type === 'sad') {
            updateSagaReaction({
                variables: {
                    _id: value.id,
                    like: value.like,
                    hearth: value.hearth,
                    smile: value.smile,
                    surprise: value.surprise,
                    sad: value.sad + 1,
                },
            })
        }
        window.location.reload()
    }

    const [updateSagaReaction, { loading }] = useMutation(UPDATE_SAGAS_REACTIONS)

    if (loading) return <CircularProgress className={classes.progress} />

    return (
        <Container>
            {showNumbers ? (
                isClickable ? (
                    <ReactionTextContainer onClick={() => _handleOnClick('like')}>
                        <CountryImg src='https://i.imgur.com/dG8tooW.png' />
                        <>{value ? value.like : 0}</>
                    </ReactionTextContainer>
                ) : (
                    <ReactionTextContainer>
                        <CountryImg src='https://i.imgur.com/dG8tooW.png' />
                        <>{value ? value.like : 0}</>
                    </ReactionTextContainer>
                )
            ) : (
                <CountryImg src='https://i.imgur.com/dG8tooW.png' />
            )}
            {showNumbers ? (
                isClickable ? (
                    <ReactionTextContainer onClick={() => _handleOnClick('hearth')}>
                        <CountryImg src='https://i.imgur.com/ei1Br91.png' />
                        <>{value ? value.hearth : 0}</>
                    </ReactionTextContainer>
                ) : (
                    <ReactionTextContainer>
                        <CountryImg src='https://i.imgur.com/ei1Br91.png' />
                        <>{value ? value.hearth : 0}</>
                    </ReactionTextContainer>
                )
            ) : (
                <CountryImg src='https://i.imgur.com/ei1Br91.png' />
            )}
            {showNumbers ? (
                isClickable ? (
                    <ReactionTextContainer onClick={() => _handleOnClick('smile')}>
                        <CountryImg src='https://i.imgur.com/GRtZUgV.png' />
                        <>{value ? value.smile : 0}</>
                    </ReactionTextContainer>
                ) : (
                    <ReactionTextContainer>
                        <CountryImg src='https://i.imgur.com/GRtZUgV.png' />
                        <>{value ? value.smile : 0}</>
                    </ReactionTextContainer>
                )
            ) : (
                <CountryImg src='https://i.imgur.com/GRtZUgV.png' />
            )}
            {showNumbers ? (
                isClickable ? (
                    <ReactionTextContainer onClick={() => _handleOnClick('surprise')}>
                        <CountryImg src='https://i.imgur.com/rm5OL2a.png' />
                        <>{value ? value.surprise : 0}</>
                    </ReactionTextContainer>
                ) : (
                    <ReactionTextContainer>
                        <CountryImg src='https://i.imgur.com/rm5OL2a.png' />
                        <>{value ? value.surprise : 0}</>
                    </ReactionTextContainer>
                )
            ) : (
                <CountryImg src='https://i.imgur.com/rm5OL2a.png' />
            )}
            {showNumbers ? (
                isClickable ? (
                    <ReactionTextContainer onClick={() => _handleOnClick('sad')}>
                        <CountryImg src='https://i.imgur.com/HXPL7Zt.png' />
                        <>{value ? value.sad : 0}</>
                    </ReactionTextContainer>
                ) : (
                    <ReactionTextContainer>
                        <CountryImg src='https://i.imgur.com/HXPL7Zt.png' />
                        <>{value ? value.sad : 0}</>
                    </ReactionTextContainer>
                )
            ) : (
                <CountryImg src='https://i.imgur.com/HXPL7Zt.png' />
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

const CountryImg = styled.img`
    padding-left: 10px;
    height: 20px;
    width: 22px;
`

const ReactionTextContainer = styled.div`
    display: block;
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

export default ReactionsContainer
