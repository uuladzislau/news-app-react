import React, { Component } from "react"
import styled from "styled-components"

const NewsCard = styled.article`
    width: 480px;
    margin-bottom: 50px;
    background-color: ${props => props.theme.onBackgroundColor};
    font-family: ${props => props.theme.mainFontFamily};
    display: flex;
    flex-direction: column;
`;
const CardHeading = styled.div`
    height: 280px;
    padding: 1em 1.5em;
    display: flex;
`;

const CardImage = styled.img`
    object-fit: cover;
    min-width: 100%;
`;

const CardBody = styled.div`
    padding: 1em 1.5em;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    margin: 0 0 auto 0;
    padding: 0;
`;

const Subtitle = styled.div`
    margin-top: 0.5em;
`;

const Description = styled.div`
    margin: 1em 0;
    color: #555555;

    & ul {
        margin: 0;
    }
`;

const MoreButton = styled.a.attrs({
    target: "blank_"
})`
    cursor: pointer;
    padding: 1.1em 2em;
    box-sizing: border-box;
    color: ${props => props.theme.secondaryColor};
    font-family: ${props => props.theme.mainFontFamily};
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    background-color: transparent;
    border: 3px solid ${props => props.theme.secondaryColor};
    border-bottom: 6px solid ${props => props.theme.secondaryColor};

    &:hover {
        background-color: ${props => props.theme.secondaryColor};
        color: ${props => props.theme.onSecondaryColor};
    }

    &:focus {
        outline: none;
    }
`;

const News = (props) => {
    const formatDate = (stringDate) => {
        const date = new Date(stringDate);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
        return formattedDate;
    }

    const defaultImage = "https://cdn2.img.inosmi.ru/images/20739/28/207392879.jpg";

    return (
        <NewsCard>
            <CardHeading>
                <CardImage src={props.imageUrl || defaultImage}></CardImage>
            </CardHeading>
            <CardBody>
                <Title>{props.title}</Title>
                <Subtitle>{props.author || "Unknown author"} at {formatDate(props.date)}</Subtitle>
                <Description>{props.description || "Description is missing"}</Description>
                <MoreButton href={props.url}>More</MoreButton>
            </CardBody>
        </NewsCard>
    )
};

export default News;