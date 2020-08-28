import React from 'react';
import { URL_IMG, IMG_SIZE_LARGE, IMG_SIZE_SMALL } from '../const';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Poster = ({ id, path, large = false }) => {
	const Img = styled(Image)`
        border-radius: 3px;
    `;

	const Article = styled(Link)`
        height: 231px;
        width: 154px;
    `;

	const ImgSize = () => {
		if (large) {
			return IMG_SIZE_LARGE;
		} else {
			return IMG_SIZE_SMALL;
		}
	};
	if (id) {
		return (
			<Article to={'/movie/' + id}>
				<Img className="image" key={id} src={URL_IMG + ImgSize() + path} />
			</Article>
		);
    } else {
        return (
            <Img className="image" key={id} src={URL_IMG + ImgSize() + path} />
        )
    }
};
