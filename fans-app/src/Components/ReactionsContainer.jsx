import React from 'react'
import styled from 'styled-components'

const ReactionsContainer = ({ showNumbers, value }) => {
    console.log('value', value)
    return (
        <Container>
            {showNumbers ? (
                <ReactionTextContainer>
                    <CountryImg src='https://i.imgur.com/dG8tooW.png' />
                    <>{value ? value.like : 0}</>
                </ReactionTextContainer>
            ) : (
                <CountryImg src='https://i.imgur.com/dG8tooW.png' />
            )}
            {showNumbers ? (
                <ReactionTextContainer>
                    <CountryImg src='https://i.imgur.com/ei1Br91.png' />
                    <>{value ? value.hearth : 0}</>
                </ReactionTextContainer>
            ) : (
                <CountryImg src='https://i.imgur.com/ei1Br91.png' />
            )}
            {showNumbers ? (
                <ReactionTextContainer>
                    <CountryImg src='https://i.imgur.com/GRtZUgV.png' />
                    <>{value ? value.smile : 0}</>
                </ReactionTextContainer>
            ) : (
                <CountryImg src='https://i.imgur.com/GRtZUgV.png' />
            )}
            {showNumbers ? (
                <ReactionTextContainer>
                    <CountryImg src='https://i.imgur.com/rm5OL2a.png' />
                    <>{value ? value.surprise : 0}</>
                </ReactionTextContainer>
            ) : (
                <CountryImg src='https://i.imgur.com/rm5OL2a.png' />
            )}
            {showNumbers ? (
                <ReactionTextContainer>
                    <CountryImg src='https://i.imgur.com/HXPL7Zt.png' />
                    <>{value ? value.sad : 0}</>
                </ReactionTextContainer>
            ) : (
                <CountryImg src='https://i.imgur.com/HXPL7Zt.png' />
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

const CountryImg = styled.img`
    padding-left: 10px;
    height: 20px;
    width: 22px;
`

const ReactionTextContainer = styled.div`
    display: block;
`

export default ReactionsContainer
