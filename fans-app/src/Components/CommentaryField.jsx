import React, { useState } from 'react'
import styled from 'styled-components'
import userIcon from '../assets/static/person-circle-outline.svg'
import { GET_MOVIE_COMMENTARIES, DELETE_USER_COMMENTARY } from '../queries/index'
import { useQuery, useMutation } from 'react-apollo'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import DeleteIcon from '@material-ui/icons/Delete'

const CommentaryField = ({ movieId }) => {
  const classes = useStyles()
  const [data, setData] = useState('')

  const _handleDeleteCommentary = (id) => {
    deleteUserCommentary({ variables: { _id: id } })
    window.location.reload()
  }

  const { loading } = useQuery(GET_MOVIE_COMMENTARIES, {
    variables: {
      movie_id: movieId.toString(),
    },
    onCompleted: (data) => {
      setData(data.getMovieCommentaries)
    },
  })

  const [deleteUserCommentary] = useMutation(DELETE_USER_COMMENTARY)

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
                <div>
                  <UserImg src={userIcon} alt='' />
                  <UserText>{comment.user}</UserText>
                  <Fab
                    key={comment.id}
                    onClick={() => {
                      _handleDeleteCommentary(comment.id)
                    }}
                    color='secondary'
                    aria-label='add'
                  >
                    <DeleteIcon />
                  </Fab>
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
  margin: 20px;
  border-radius: 5px;
  min-height: 200px;
  min-width: 300px;
  display: inline-block;
  background: #1b1b2f;
`

const Text = styled.p`
  text-align: justify;
  padding: 30px;
`

const UserText = styled.p`
  font-size: 1.5vw;
`

const UserImg = styled.img`
  margin-top: 5%;
  width: 50px;
  border-radius: 100%;
  object-fit: cover;
  filter: invert(100%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(100%)
    contrast(80%);
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 150,
    marginLeft: '10%',
    marginRight: '10%',
  },
  paper: {
    backgroundColor: '#7A0B00',
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
