import React, { useState, useContext } from "react"
import styled, { css } from "styled-components"

const BaseSearchFormItemStyles = css`
    padding: 1.1em 2em;
    box-sizing: border-box;
    color: ${props => props.theme.onBackgroundColor};
    font-family: ${props => props.theme.mainFontFamily};
    font-size: 16px;
    text-transform: uppercase;
    background-color: transparent;
    border: 3px solid ${props => props.theme.onBackgroundColor};
    border-bottom: 6px solid ${props => props.theme.onBackgroundColor};

    &:focus {
        outline: none;
    }
`

const SearchBarForm = styled.form`
    width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const SourceSelector = styled.select`
    ${BaseSearchFormItemStyles};
    appearance: none;
    width: 250px;
    padding-right: 0.7em;
    cursor: pointer;
`;

const SourceItem = styled.option``;

const SearchQueryInput = styled.input.attrs({
    type: "text",
    placeholder: "Type search keywords here"
})`
    ${BaseSearchFormItemStyles};
    width: 550px;
    padding-right: 0.7em;
`;

const SubmitButton = styled.button`
    ${BaseSearchFormItemStyles};
    width: 150px;
    cursor: pointer;
    border-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryColor};
    font-weight: bold;
    letter-spacing: 0.25em;

    &:hover {
        background-color: ${props => props.theme.primaryColor};
        color: ${props => props.theme.onPrimaryColor};
    }
`;

const SearchBar = (props) => {
    const [source, setSource] = useState("techcrunch");
    const [query, setQuery] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        props.searchHandler({source: source, query: query});
    }

    return (
        <SearchBarForm onSubmit={formSubmitHandler}>
            <SourceSelector value={source} onChange={e => setSource(e.target.value)}>
                <SourceItem value="techcrunch">TechCrunch</SourceItem>
                <SourceItem value="financial-post">Financial Post</SourceItem>
                <SourceItem value="bloomberg">Bloomberg</SourceItem>
                <SourceItem value="the-wall-street-journal">The Wall Street Journal</SourceItem>
                <SourceItem value="business-insider">Business Insider</SourceItem>
                <SourceItem value="cnn">CNN</SourceItem>
                <SourceItem value="fox-news">Fox News</SourceItem>
                <SourceItem value="new-york-magazine">New York Magazine</SourceItem>
                <SourceItem value="national-geographic">National Geographic</SourceItem>
                <SourceItem value="mtv-news">MTV News</SourceItem>
            </SourceSelector>
            <SearchQueryInput value={query} onChange={e => setQuery(e.target.value)}/>
            <SubmitButton>Search</SubmitButton>
        </SearchBarForm>
    )
};

export default SearchBar;