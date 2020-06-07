import React, { Component } from 'react'
import DataMovies from '../../Components/Details/index'
import { connect } from 'react-redux'
import { detailMovieAction } from '../../Redux/Actions/movies'
import { castsMovieAction } from '../../Redux/Actions/casts'
import { DetailMovie } from './styles'
import { GET_CURRENT_USER } from '../../queries/index'
import { Query } from 'react-apollo'

class MovieDetailsContainer extends Component {
    async componentDidMount() {
        console.log('this.props', this.props)
        await this.props.detailMovieAction(this.props.match.params.id)
        await this.props.castsMovieAction(this.props.match.params.id)
    }

    render() {
        return (
            <Query query={GET_CURRENT_USER}>
                {({ data, loading }) => {
                    if (loading) return null
                    return (
                        <DetailMovie>
                            <DataMovies session={data} movie={this.props.movie} cast={this.props.cast} />
                        </DetailMovie>
                    )
                }}
            </Query>
        )
    }
}
const mapStateToProps = (state) => {
    return { movie: state.movie, cast: state.cast }
}
const mapDispatchToProps = {
    detailMovieAction,
    castsMovieAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer)
