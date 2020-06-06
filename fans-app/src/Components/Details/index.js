import React from 'react';
import { Container } from 'reactstrap';
import { URL_IMG, IMG_SIZE_LARGE } from '../const';
import { Img, Title, Row, Column, Text } from './styles';
// import StarRating from 'react-star-ratings';
import { Rating } from '@material-ui/lab';
import Cast from '../../Components/Cast/index'
const DataMovies = ({ movie, cast }) => {
	if (movie) {
		return (
			<Container>
				<Row>
					<Column xs={12} sm={6} md={4}>
						<Img src={URL_IMG + IMG_SIZE_LARGE + movie.poster_path} />
						<Row>
							<Column>
								<Text widthSmall>Genres:
									{movie.genres? movie.genres.map(gen => (
										<div key={gen.id}>
											*{gen.name}
										</div>
									)): null}
								</Text>
							</Column>
						</Row>
					</Column>
					<Column xs={12} sm={6} md={8}>
						<Title style={{ display: 'flex', justifyContent: 'space-between' }}>{movie.title}</Title>
						<Row>
							{movie.release_date}
							<div>
								<Rating
									name="size-small"
									style={{ marginLeft: '50px', bottom: '5px' }}
									defaultValue={movie.vote_average / 2}
									precision={0.5}
									readOnly
								/>
							</div>
						</Row>
						<Row>
							<Column style={{paddingLeft: '0'}}>{movie.tagline}</Column>
						</Row>
						<Text>{movie.overview}</Text>
						<Row>
						</Row>
					</Column>
				</Row>
				<Cast cast={cast}/>
			</Container>
		);
	} else {
		return <div>Loading...</div>;
	}
};
export default DataMovies;
