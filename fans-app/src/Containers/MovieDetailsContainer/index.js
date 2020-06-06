import React, { Component } from 'react';
import DetailsMovie from '../../Components/detailsMovie/index';
import DataMovies from '../../Components/Details/index';
import { connect } from 'react-redux';
import { detailMovieAction } from '../../Redux/Actions/movies';
import { DetailMovie } from './styles';
class MovieDetailsContainer extends Component {
	async componentDidMount() {
		console.log(this.props.match.params.id);
		await this.props.detailMovieAction(this.props.match.params.id);
	}

	handlerInfo() {
		if (this.props.movie) {
			console.log(this.props.movie);
			return this.props.movie;
		}
	}

	render() {
		return (
            <DetailMovie>
			    <DataMovies movie={this.handlerInfo()}/>
            </DetailMovie>
		);
	}
}
const mapStateToProps = (state) => {
	return { movie: state.movie };
};
const mapDispatchToProps = {
	detailMovieAction
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);
