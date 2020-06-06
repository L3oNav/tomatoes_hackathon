import React, { Component } from 'react';
import DetailsMovie from '../../Components/detailsMovie/index';
import DataMovies from '../../Components/Details/index';
import { connect } from 'react-redux';
import { detailMovieAction } from '../../Redux/Actions/movies';
import { castsMovieAction } from '../../Redux/Actions/casts';
import { DetailMovie } from './styles';
class MovieDetailsContainer extends Component {
	async componentDidMount() {
		await this.props.detailMovieAction(this.props.match.params.id);
		await this.props.castsMovieAction(this.props.match.params.id);
	}

	render() {
		return (
            <DetailMovie>
			    <DataMovies movie={this.props.movie} cast={this.props.cast}/>
            </DetailMovie>
		);
	}
}
const mapStateToProps = (state) => {
	return { movie: state.movie, cast: state.cast };
};
const mapDispatchToProps = {
	detailMovieAction,
	castsMovieAction
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);
