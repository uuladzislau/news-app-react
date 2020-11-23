import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Header from "./Header"
import SearchBar from "./SearchBar"
import NewsFeed from "./NewsFeed"
import News from "./News"
import LoadMoreButton from "./LoadMoreButton"

import ApiManager from "./ApiManager"

const AppContainer = styled.div`
    min-height: 100%;
    background-color: ${props => props.theme.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const App = () => {
    const [articles, setArticles] = useState([]);
    const [filter, setFilter] = useState({
        source: "techcrunch",
        query: ""
    });
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState();

    useEffect(() => {
        ApiManager
            .fetchNews(filter.source, filter.query, 1, 5)
            .then(response => {
                const total = ~~(response.totalResults / 5);
                setLastPage(total > 5 ? 5 : total);
                setArticles(response.articles);
            });
    }, []);

    const handleSearch = (searchForm) => {
        ApiManager
            .fetchNews(searchForm.source, searchForm.query, 1, 5)
            .then(response => {
                const total = ~~(response.totalResults / 5);
                setPage(1);
                setLastPage(total > 5 ? 5 : total);
                setFilter({
                    source: searchForm.source,
                    query: searchForm.query
                });
                setArticles(response.articles);
            });
    };

    const loadMore = () => {
        const nextPage = page + 1;
        ApiManager
            .fetchNews(filter.source, filter.query, nextPage, 5)
            .then(response => {
                setPage(nextPage);
                setArticles([...articles, ...response.articles]);
            });
    }

    return (
        <AppContainer>
            <Header></Header>
            <SearchBar searchHandler={handleSearch}></SearchBar>
            <NewsFeed>
                {articles.map((item, index) =>
                    <News
                        key={index}
                        imageUrl={item.urlToImage}
                        title={item.title}
                        author={item.author}
                        date={item.publishedAt}
                        description={item.description}
                        url={item.url}
                    />
                )}
            </NewsFeed>
            <LoadMoreButton visible={page < lastPage} loadMoreHandler={loadMore}></LoadMoreButton>
        </AppContainer>
    )
};

export default App;