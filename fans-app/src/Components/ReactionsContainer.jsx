import React from 'react'
import styled from 'styled-components'

const ReactionsContainer = ({ showNumbers }) => {
    return (
        <Container>
            {showNumbers ? (
                <ReactionTextContainer>
                    <CountryImg src='https://i.imgur.com/dG8tooW.png' />
                    <>0</>
                </ReactionTextContainer>
            ) : (
                <CountryImg src='https://i.imgur.com/dG8tooW.png' />
            )}
            {showNumbers ? (
                <ReactionTextContainer>
                    <CountryImg src='https://i.imgur.com/ei1Br91.png' />
                    <>0</>
                </ReactionTextContainer>
            ) : (
                <CountryImg src='https://i.imgur.com/ei1Br91.png' />
            )}
            {showNumbers ? (
                <ReactionTextContainer>
                    <CountryImg src='https://i.imgur.com/GRtZUgV.png' />
                    <>0</>
                </ReactionTextContainer>
            ) : (
                <CountryImg src='https://i.imgur.com/GRtZUgV.png' />
            )}
            {showNumbers ? (
                <ReactionTextContainer>
                    <CountryImg src='https://i.imgur.com/rm5OL2a.png' />
                    <>0</>
                </ReactionTextContainer>
            ) : (
                <CountryImg src='https://i.imgur.com/rm5OL2a.png' />
            )}
            {showNumbers ? (
                <ReactionTextContainer>
                    <CountryImg src='https://i.imgur.com/HXPL7Zt.png' />
                    <>0</>
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
