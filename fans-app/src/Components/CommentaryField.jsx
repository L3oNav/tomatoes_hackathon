import React, { useState } from 'react'
import styled from 'styled-components'
import userIcon from '../assets/static/person-circle-outline.svg'
import { GET_MOVIE_COMMENTARIES } from '../queries/index'
import { useQuery, useMutation } from 'react-apollo'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const CommentaryField = () => {
    const classes = useStyles()
    const [data, setData] = useState('')
    const { loading } = useQuery(GET_MOVIE_COMMENTARIES, {
        variables: {
            movie_id: '123123123',
        },
        onCompleted: (data) => {
            console.log('data', data.getMovieCommentaries)
            setData(data.getMovieCommentaries)
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
            {data
                ? data.map((comment) => (
                      <Container key={comment.id}>
                          <>
                              {console.log('comment', comment)}
                              <div>
                                  <UserImg src={userIcon} alt='' />
                                  <UserText>{comment.user}</UserText>
                                  {/* <UserText>{data[0].user}</UserText> */}
                              </div>
                              <Text>{comment.text}</Text>
                          </>
                      </Container>
                  ))
                : null}
        </>
    )
}

const Container = styled.div`
    border-radius: 5px;
    min-height: 200px;
    min-width: 300px;
    display: inline-block;
    background: #1b1b2f;
`

const Text = styled.div`
    text-align: justify;
    padding: 30px;
`

const UserText = styled.p``

const UserImg = styled.img`
    margin-top: 5%;
    width: 50px;
    border-radius: 100%;
    object-fit: cover;
    filter: invert(100%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(100%) contrast(80%);
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

export default CommentaryField
