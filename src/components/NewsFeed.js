import React from "react"
import styled from "styled-components"

const NewsFeedContent = styled.section`
    margin: 6em 0 0 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 1000px;
`;

const Alert = styled.div`
    margin: 6em auto 0 auto;
    width: 1000px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;

const NothingToDisplay = styled.p`
    margin: 0;
    padding: 0;
    color: ${props => props.theme.onBackgroundColor};
    font-size: 24px;
    font-family: ${props => props.theme.mainFontFamily};
    text-transform: uppercase;
`;

const NewsFeed = (props) => {

    if (props.children.length == 0) {
        return (
            <Alert>
                <NothingToDisplay>There are no articles matching your request</NothingToDisplay>
            </Alert>
        )
    }

    return (
        <NewsFeedContent>
            {props.children}
        </NewsFeedContent>
    )
}

export default NewsFeed;