import React from 'react'
import styled from 'styled-components'
import '../assets/styles/components/Card.scss'

const Card = ({ title, img }) => (
    <div className='card'>
        <div className='card_image'>
            {' '}
            <img src={img} alt='blog' />{' '}
        </div>
        <CardTitleContainer>
            <CardTitle>{title}</CardTitle>
        </CardTitleContainer>
    </div>
)

const CardTitleContainer = styled.div`
    text-align: center;
    border-radius: 0px 0px 40px 40px;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 30px;
    margin-top: -80px;
`

const CardTitle = styled.p`
    background-color: rgba(0, 0, 0, 0.5);
    width: 300px;
    height: 50px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 0px 0px 40px 40px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`

export default Card
