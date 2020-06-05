import React from 'react';
import { URL_IMG, IMG_SIZE_LARGE } from '../const';
import {ContainerImgTitle, Img, Title, Text} from './styles'

const DetailsMovie = ({movie}) => {
		if (movie) {
			return (
                <ContainerImgTitle>
                    <Img src={URL_IMG+IMG_SIZE_LARGE+movie.poster_path}/>
                    <Title>{movie.title}</Title>
                    <Text>{movie.tagline}</Text>
                </ContainerImgTitle>
			);
		} else {
			return <div>Loading...</div>;
        }
}
export default (DetailsMovie);
