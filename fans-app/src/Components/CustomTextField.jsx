import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import React, { useState } from 'react'
import styled from 'styled-components'
import CustomTextArea from '../Components/CustomTextArea'
import Footer from '../Components/Footer'
import CommentaryField from './CommentaryField'
import { makeStyles } from '@material-ui/core/styles'
import { ADD_COMMENTARY } from '../queries/index'
import { useMutation } from 'react-apollo'
import CircularProgress from '@material-ui/core/CircularProgress'

const CustomTextField = ({ session }) => {
    const classes = useStyles()
    const [movieId, setMovieId] = useState('104')
    const [text, setText] = useState('lorem ipsum')

    const _handleInputChange = (event) => {
        const { name, value } = event.target
        if (name === 'commentary') {
            setText(value)
        }
    }

    const _handleOnClick = () => {
        addComment()
        window.location.reload()
    }

    const [addComment, { loading }] = useMutation(ADD_COMMENTARY, {
        variables: { movie_id: movieId, user: session.getCurrentUser.username, text },
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
                <Grid container spacing={3}>
                    <Grid item sm={8} xs={12}>
                        <Paper className={classes.saveProfilePaper}>
                            {` `}
                            <CommentaryField session={session}></CommentaryField>
                            <form className={classes.formTextField} noValidate autoComplete='off'>
                                <InputContainer>
                                    <CustomTextArea
                                        name={'commentary'}
                                        type={'text'}
                                        placeholder={'Comentario'}
                                        multiline
                                        value={`${text}`}
                                        onChange={_handleInputChange}
                                        title={'Comentario'}
                                    />
                                </InputContainer>
                                <Button
                                    variant='contained'
                                    className={classes.saveButtonProfile}
                                    onClick={_handleOnClick}
                                >
                                    Publicar
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
    margin-top: 100px;
    background-color: #162447;
    min-height: 100vh;
`

const InputContainer = styled.div`
    padding-top: 20px;
`

const useStyles = makeStyles((theme) => ({
    saveProfilePaper: {
        backgroundColor: '#1f4068',
        textAlign: 'center',
        alignItems: 'center',
        margin: 'auto',
        height: 'auto',
        color: 'white',
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
        marginTop: 0,
        marginBottom: 20,
    },
}))

export default CustomTextField
