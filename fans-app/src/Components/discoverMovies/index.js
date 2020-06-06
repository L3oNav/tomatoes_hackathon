import React, { Component } from 'react'
import { discoverMoviesAction } from '../../Redux/Actions/movies'
import { connect } from 'react-redux'
import { Poster } from '../Poster/index'
import styled from 'styled-components'

const ListMovies = styled.div`
  padding-top: 15px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  grid-gap: 15px;
`

class DiscoverMovies extends Component {
  constructor(props){
    super(props)
    this.getMoviesHandler = this.getMoviesHandler.bind(this)
  }

  async componentDidMount(){
    await this.props.discoverMoviesAction();
  }

  getMoviesHandler(){
    if (this.props.movies){
      const movies = this.props.movies
      if (movies){
        return movies.results
      }
    }
  }

  render(){
    if (this.props.movies){
      const movies = this.getMoviesHandler()
      return(
        <ListMovies>
	  {movies? movies.map(movie => <Poster key={movie.id} id={movie.id} info={true} path={movie.poster_path} 
	    title={movie.title} voteAverage={movie.vote_average} release_date={movie.release_date}/>): null}
        </ListMovies>
      )
    } else {
      return 'Loading...'
    }
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = {
  discoverMoviesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverMovies)
