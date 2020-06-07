import React, { Component } from 'react'
import { discoverMoviesAction } from '../../Redux/Actions/movies'
import { connect } from 'react-redux'
import { Poster } from '../Poster/index'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ListMovies = styled.div`
    padding-top: 150px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: center;
    grid-gap: 15px;
`
const Article = styled(Link)`
    text-decoration: none;
    color: #e43f5a;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
`

class DiscoverMovies extends Component {
    constructor(props) {
        super(props)
        // this.getMovie/sHandler = this.getMoviesHandler.bind(this);
        console.log(typeof this.props.match.params.page)
        this.state = {
            nextPage: parseInt(this.props.match.params.page) + 1,
            previousPage: parseInt(this.props.match.params.page) - 1,
        }
    }

    async componentDidMount() {
        await this.props.discoverMoviesAction(parseInt(this.props.match.params.page))
    }

    getMoviesHandler() {
        if (this.props.movies) {
            const movies = this.props.movies
            if (movies) {
                console.log(movies)
                return movies.map((movie) => (
                    <Poster key={movie.id} id={movie.id} path={movie.poster_path} title={movie.title} />
                ))
            }
        }
    }

    handlerButtons() {
        if (parseInt(this.props.match.params.page) > 1) {
            return <Article to={/movies/ + this.state.previousPage}>&#60;&#60;Previous</Article>
        }
    }

    async componentDidUpdate(prevProps) {
        if (this.props.match.params.page !== prevProps.match.params.page) {
            await this.props.discoverMoviesAction(parseInt(this.props.match.params.page))
        }
    }

    render() {
        if (this.props.movies) {
            //   const MoviePromise = this.getMoviesHandler();
            console.log(this.props)
            return (
                <ListMovies>
                    {this.getMoviesHandler()}
                    {this.handlerButtons()}
                    <Article to={/movies/ + this.state.nextPage}>Next&#62;&#62;</Article>
                </ListMovies>
            )
        } else {
            return 'Loading...'
        }
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
    }
}

const mapDispatchToProps = {
    discoverMoviesAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverMovies)
