import React, { Component } from 'react';
import DetailsMovie from '../../Components/detailsMovie/index'
import {connect} from 'react-redux'
import {detailMovieAction} from '../../Redux/Actions/movies'
class MovieDetailsContainer extends Component {
    async componentDidMount() {
        console.log(this.props.match.params.id)
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
            <div>
                <DetailsMovie movie={this.props.movie}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
	return { movie: state.movie };
};
const mapDispatchToProps = {
	detailMovieAction
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer)