import styled, { css } from 'styled-components';

export const Img = styled.img``;

export const Title = styled.h3`
    
`;

export const Text = styled.p`
    text-align: justify;
    width: 740px;
    ${props => props.widthSmall && css`
        width: 243px;
    `}
`;

export const Row = styled.div`
    display: flex;
    ${props => props.center && css`
        justify-content: center;
    `}
    ${props => props.spaceBetween && css`
        justify-content: space-between;
    `}
    ${props => props.spaceEvenly && css`
        justify-content: space-evenly;
    `}
    ${props => props.spaceAround && css`
        justify-content: space-around;
    `}
`;

export const Column = styled.div`
    padding: 10px;
`;
