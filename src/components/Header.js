import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    margin: 1.5em 0 0.5em 0;
    padding: 0;
    color: ${props => props.theme.onBackgroundColor};
    font-size: 72px;
    font-weight: bold;
    font-family: ${props => props.theme.mainFontFamily};
    text-transform: uppercase;
    letter-spacing: 0.25em;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Title>News App React</Title>
        </HeaderWrapper>
    )
};

export default Header;