import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { ADD_COMMENTARY, GET_CURRENT_USER } from '../../queries/index'
import { movieCastAction } from '../../Redux/Actions/casts'
import { movieGetAction } from '../../Redux/Actions/movie'
import Cast from '../Cast/index'
import CustomTextArea from '../CustomTextArea'
import { Detail } from '../Detail/index'
import Video from '../Video/index'
import { Container } from './styles'
import Button from '@material-ui/core/Button'
import CommentaryField from '../CommentaryField'

class DetailMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      text: '',
    }
    this.showMovie = this.showMovie.bind(this)

    this.useStyles = makeStyles((theme) => ({
      saveProfilePaper: {
        backgroundColor: '#780000',
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
  }

  async componentDidMount() {
    if (!this.props.data.movie.length) {
      await this.props.movieGetAction(parseInt(this.state.id))
      await this.props.movieCastAction(parseInt(this.state.id))
    }
  }

  showMovie = () => {
    if (this.props.data.movie) {
      let movie = this.props.data.movie
      return <Detail movie={movie} />
    }
  }
  showCast = () => {
    let { cast } = this.props.cast
    if (cast) {
      return <Cast cast={cast} />
    }
  }

  render() {
    const _handleInputChange = (event) => {
      const { name, value } = event.target
      if (name === 'commentary') {
        console.log('this.state.text :>> ', this.state.text)
        this.setState({ text: value })
      }
    }

    const _handleOnClick = (addCommentary) => {
      addCommentary()
      window.location.reload()
    }

    return (
      <Container>
        {this.showMovie()}
        {this.showCast()}
        <Query query={GET_CURRENT_USER}>
          {({ data, loading }) => {
            if (loading) return null
            console.log('data :>> ', data)
            return data.getCurrentUser ? (
              <>
                <Video id={this.state.id} />
                <CommentaryContainer>
                  <Grid container spacing={3}>
                    <Grid item sm={12} xs={12}>
                      <Paper className={this.useStyles().saveProfilePaper}>
                        {/* <Paper> */}
                        {` `}
                        {this.state.id ? (
                          <CommentaryField movieId={this.state.id}></CommentaryField>
                        ) : null}
                        <form
                          className={this.useStyles().formTextField}
                          noValidate
                          autoComplete='off'
                        >
                          <InputContainer>
                            <CustomTextArea
                              name={'commentary'}
                              type={'text'}
                              placeholder={'Comentario'}
                              multiline
                              value={`${this.state.text}`}
                              onChange={_handleInputChange}
                              title={'Comentario'}
                            />
                          </InputContainer>
                          <Mutation
                            mutation={ADD_COMMENTARY}
                            variables={{
                              movie_id: this.state.id,
                              user: data.getCurrentUser.username,
                              text: this.state.text,
                            }}
                          >
                            {(addCommentary, attrs = {}) => {
                              return (
                                <Button
                                  variant='contained'
                                  className={this.useStyles().saveButtonProfile}
                                  onClick={() => _handleOnClick(addCommentary)}
                                >
                                  Publicar
                                </Button>
                              )
                            }}
                          </Mutation>
                        </form>
                      </Paper>
                    </Grid>
                  </Grid>
                </CommentaryContainer>
              </>
            ) : null
          }}
        </Query>
      </Container>
    )
  }
}

const InputContainer = styled.div`
  padding-top: 20px;
`

const CommentaryContainer = styled.div`
  margin-top: 50px;
`

const mapStateToProps = (state) => {
  return {
    data: state.movie,
    cast: state.cast,
  }
}

const mapDispatchToProps = {
  movieGetAction,
  movieCastAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie)
