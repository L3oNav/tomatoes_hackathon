import React, { Component } from 'react'
import { connect } from 'react-redux'

import { moviesVideosAction } from '../../Redux/Actions/video'
import P5Wrapper from 'react-p5-wrapper'
import objectDetectionSketch from '../ObjectDetectionSketch'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

import { Mutation } from 'react-apollo'
import { ADD_COMMENTARY } from '../../queries'

// const [addEmotion, { loading, error }] = useMutation(ADD_COMMENTARY, {
//   variables: { movie_id: '577922', user: 'daniel', text: 'happy!' },
// })

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`

class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: 0,
      actualEmotion: '',
    }
  }
  async componentDidMount() {
    await this.props.moviesVideosAction(this.props.id)
  }

  render() {
    const _handleOnClick = (addEmotion) => {
      console.log('this.state.actualEmotion :>> ', this.state.actualEmotion)
      addEmotion()
    }

    const onTrigger = (drawing) => {
      console.log('expressions:>> ', drawing.expressions)
      console.log('gender:>> ', drawing.gender)
      console.log('age:>> ', drawing.age)
    }

    if (this.props.video.video.results) {
      return (
        <Container>
          <Container>
            <iframe
              title='iFrame'
              width='640'
              height='480'
              src={
                'https://www.youtube.com/embed/' + this.props.video.video.results[0].key
              }
            />
            <P5Wrapper sketch={(p) => objectDetectionSketch({ p, onTrigger })} />
          </Container>
          <Mutation
            mutation={ADD_COMMENTARY}
            variables={{
              movie_id: '577922',
              user: 'daniel',
              text: 'happy!',
            }}
          >
            {(addEmotion, attrs = {}) => {
              return null
              // <Button variant='contained' onClick={() => _handleOnClick(addEmotion)}>
              //   Guardar Emoción
              // </Button>
            }}
          </Mutation>
        </Container>
      )
    } else {
      return 'Loading ...'
    }
  }
}
const mapStateToProps = (state) => {
  return {
    video: state.video,
  }
}
const mapDispatchToProps = {
  moviesVideosAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Video)
