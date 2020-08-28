import React, { Component } from 'react';
import { moviesDiscoverAction } from '../../Redux/Actions/movies';
import { Poster } from '../Poster/index';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NavigationButtons from '../NavigationButtons/index';

const ContainerMovies = styled.div`
	padding-top: 150px;
	display: grid;
	grid-template-columns: repeat(4, auto);
	justify-content: center;
	grid-gap: 15px;
`;

class ListMovies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}

	async componentDidMount() {
		if (!this.props.data.movies.length) {
			await this.props.moviesDiscoverAction(this.state.page);
		}
	}
	moviesHandler() {
		if (this.props.data.movies.length) {
			let movies = this.props.data.movies;
			if (movies) {
				return movies.map(
					(movie) =>
						movie.poster_path ? (
							<Poster key={movie.id} id={movie.id} small={true} path={movie.poster_path} />
						) : null
				);
			}
		}
	}
	async componentDidUpdate(prevProps, prevState) {
		if (this.props.match.params.page && this.props.match.params.page !== prevProps.match.params.page) {
			this.setState({ page: parseInt(this.props.match.params.page) });
		}
		if (this.state.page !== prevState.page) {
			await this.props.moviesDiscoverAction(this.state.page);
		}
	}
	render() {
		if (this.props.data.movies.length) {
			return (
				<ContainerMovies>
					{this.moviesHandler()}
					<div>
						<NavigationButtons page={this.state.page} />
					</div>
				</ContainerMovies>
			);
		} else {
			return 'Loading...';
		}
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.movies
	};
};

const mapDispatchToProps = {
	moviesDiscoverAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovies);
