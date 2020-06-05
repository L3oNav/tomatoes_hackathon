import React from 'react';
import {URL_IMG, IMG_SIZE_LARGE} from '../const'
import { Image } from 'react-bootstrap'
import styled from 'styled-components'
// import { BsStarFill, BsStarHalf, BsStar } from 'react-icons'
export const Poster = (
    {id,
    path,
    title,
    info,
    voteAverage,
    release_date
    }) => {
    const Info =  styled.div`
      margin:10px;
      opacity:0;
    `;
    const Title = styled.h4`
        color: #e43f5a;
    `
    const Img = styled(Image)`
        border-radius: 7px;
    `;
    const Container = styled.div`
        height: 575px;
        width: 342px;
    `;
    return (
        <Container>
            <Img className="image" key={id} src={URL_IMG+IMG_SIZE_LARGE+path}/>
            <Info>
                <Title>{title}</Title>
                {/* <Glyphicon glyph={'star'} /> {voteAverage} &nbsp;&nbsp; {release_date.substring(0,4)} */}
            </Info>
        </Container>
    )
}