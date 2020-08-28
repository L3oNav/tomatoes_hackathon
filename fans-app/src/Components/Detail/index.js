import React from 'react';
import { Poster } from '../Poster/index';
import { PosterContainer, Title, TitleContainer, Text, DetailContainer, Italic } from './styles';
export const Detail = ({ movie }) => {
	return (
		<DetailContainer>
			<PosterContainer>
				<Poster path={movie.poster_path} large />
				<TitleContainer>
					<Title>{movie.title}</Title>
					<div>{movie.release_date}</div>
					<div>
						<Italic>"{movie.tagline}"</Italic>
						<Text>{movie.overview}</Text>
					</div>
				</TitleContainer>
			</PosterContainer>
		</DetailContainer>
	);
};
