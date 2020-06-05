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
      color: #e43f5a;
      /* font-weight:bold; */
      opacity:0;
    `;
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
                <h4>{title}</h4>
                {/* <Glyphicon glyph={'star'} /> {voteAverage} &nbsp;&nbsp; {release_date.substring(0,4)} */}
            </Info>
        </Container>
    )
}