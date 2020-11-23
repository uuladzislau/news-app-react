import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    margin: 3em auto;
    width: 1000px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;

const LoadMoreButton = styled.button.attrs({
    type: "button"
})`
    padding: 1.1em 2em;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    color: ${props => props.theme.onBackgroundColor};
    font-family: ${props => props.theme.mainFontFamily};
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    border: 3px solid ${props => props.theme.onBackgroundColor};
    border-bottom: 6px solid ${props => props.theme.onBackgroundColor};

    &:hover {
        color: ${props => props.theme.backgroundColor};
        background-color: ${props => props.theme.onBackgroundColor};
    }
`;

const LoadMore = (props) => {
    const clickHandler = (e) => {
        e.preventDefault();
        props.loadMoreHandler();
    }

    if (!props.visible) {
        return null;
    }

    return (
        <Wrapper>
            <LoadMoreButton onClick={clickHandler}>Load more</LoadMoreButton>
        </Wrapper>
    )
};

export default LoadMore;