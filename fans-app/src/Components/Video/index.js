import React, { Component } from 'react';
import { connect } from 'react-redux';

import { moviesVideosAction } from '../../Redux/Actions/video';
import P5Wrapper from 'react-p5-wrapper'
import objectDetectionSketch from '../ObjectDetectionSketch'
class Video extends Component {
	async componentDidMount() {
		await this.props.moviesVideosAction(this.props.id);
	}

	render() {
		if (this.props.video.video.results) {
			return (
				<div>
					<P5Wrapper sketch={objectDetectionSketch}/>
					<iframe
						width="640"
						height="480"
						src={'https://www.youtube.com/embed/' + this.props.video.video.results[0].key}
					/>
				</div>
			);
		} else {
			return 'Loading ...';
		}
	}
}
const mapStateToProps = (state) => {
	return {
		video: state.video
	};
};
const mapDispatchToProps = {
	moviesVideosAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);
