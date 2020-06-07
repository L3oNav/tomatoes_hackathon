import React, { useState } from 'react'
import { Container } from 'reactstrap'
import { URL_IMG, IMG_SIZE_LARGE } from '../const'
import { Img, Title, Row, Column, Text } from './styles'
// import StarRating from 'react-star-ratings';
import { Rating } from '@material-ui/lab'
import Cast from '../../Components/Cast/index'
import styled from 'styled-components'
import CustomTextArea from '../CustomTextArea'
import CommentaryField from '../CommentaryField'
import { makeStyles } from '@material-ui/core/styles'
import { ADD_COMMENTARY } from '../../queries/index'
import { useMutation } from 'react-apollo'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const DataMovies = ({ movie, cast, session }) => {
    const classes = useStyles()
    console.log('session', session)
    const [text, setText] = useState('lorem ipsum')
    const _handleInputChange = (event) => {
        const { name, value } = event.target
        if (name === 'commentary') {
            setText(value)
        }
    }

    const _handleOnClick = (movieId) => {
        addComment({ variables: { movie_id: movieId.toString(), user: session.getCurrentUser.username, text } })
        window.location.reload()
    }
    const [addComment, { loading }] = useMutation(ADD_COMMENTARY)

    if (loading)
        return (
            <div className={classes.circular}>
                <CircularProgress className={classes.progress} />
            </div>
        )

    if (movie) {
        return (
            <Container>
                <Row>
                    <Column xs={12} sm={6} md={4}>
                        <Img src={URL_IMG + IMG_SIZE_LARGE + movie.poster_path} />
                        <Row>
                            <Column>
                                <Text widthSmall>
                                    Genres:
                                    {movie.genres
                                        ? movie.genres.map((gen) => <div key={gen.id}>*{gen.name}</div>)
                                        : null}
                                </Text>
                            </Column>
                        </Row>
                    </Column>
                    <Column xs={12} sm={6} md={8}>
                        <Title style={{ display: 'flex', justifyContent: 'space-between' }}>{movie.title}</Title>
                        <Row>
                            {movie.release_date}
                            <div>
                                <Rating
                                    name='size-small'
                                    style={{ marginLeft: '50px', bottom: '5px' }}
                                    defaultValue={movie.vote_average / 2}
                                    precision={0.5}
                                    readOnly
                                />
                            </div>
                        </Row>
                        <Row>
                            <Column style={{ paddingLeft: '0' }}>{movie.tagline}</Column>
                        </Row>
                        <Text>{movie.overview}</Text>
                        <Row></Row>
                    </Column>
                </Row>
                <Cast cast={cast} />
                {session.getCurrentUser ? (
                    <CommentaryContainer>
                        <Grid container spacing={3}>
                            <Grid item sm={8} xs={12}>
                                <Paper className={classes.saveProfilePaper}>
                                    {` `}
                                    {movie.id ? (
                                        <CommentaryField movieId={movie.id} session={session}></CommentaryField>
                                    ) : null}
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
                                            onClick={() => _handleOnClick(movie.id)}
                                        >
                                            Publicar
                                        </Button>
                                    </form>
                                </Paper>
                            </Grid>
                        </Grid>
                    </CommentaryContainer>
                ) : null}
            </Container>
        )
    } else {
        return <div>Loading...</div>
    }
}

const InputContainer = styled.div`
    padding-top: 20px;
`

const CommentaryContainer = styled.div`
    align-self: center;
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
export default DataMovies
