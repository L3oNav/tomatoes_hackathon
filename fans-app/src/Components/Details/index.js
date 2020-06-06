import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { URL_IMG, IMG_SIZE_LARGE } from '../const';
import {Img, Title} from './styles'
const DataMovies = ({ movie }) => {
	if (movie) {
		return (
			<Container>
				<Row>
					<Col xs={12} sm={6} md={4}>
						<Img src={URL_IMG + IMG_SIZE_LARGE + movie.poster_path} />
					</Col>
                    <Col xs={12} sm={6} md={8}>
                        <Title>{movie.title}</Title>
                        
                    </Col>
				</Row>
			</Container>
		);
	} else {
		return <div>Loading...</div>;
	}
};
export default DataMovies;
