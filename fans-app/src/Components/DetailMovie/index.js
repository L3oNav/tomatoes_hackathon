import React, { Component } from 'react';
import { Container } from './styles';
import { Detail } from '../Detail/index';
import { connect } from 'react-redux';
import { movieGetAction } from '../../Redux/Actions/movie';
import { movieCastAction } from '../../Redux/Actions/casts';
import Cast from '../Cast/index';
import Video from '../Video/index'
class DetailMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.id
		};
		this.showMovie = this.showMovie.bind(this);
	}

	async componentDidMount() {
		if (!this.props.data.movie.length) {
			await this.props.movieGetAction(parseInt(this.state.id));
			await this.props.movieCastAction(parseInt(this.state.id));
		}
	}

	showMovie = () => {
		if (this.props.data.movie) {
			let movie = this.props.data.movie;
			return <Detail movie={movie} />;
		}
	};
	showCast = () => {
		let {cast} = this.props.cast;
		if (cast){
			return <Cast cast={cast}/>
		}
	};
	render() {
		return (
			<Container>
				{this.showMovie()}
				{this.showCast()}
				<Video id={this.state.id}/>
			</Container>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		data: state.movie,
		cast: state.cast,
	};
};

const mapDispatchToProps = {
	movieGetAction,
	movieCastAction
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
