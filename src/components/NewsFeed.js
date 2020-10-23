import React, {Component} from "react"
import News from "./News"

import '../styles/NewsFeed.css'

class NewsFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <div class="news-feed-wrapper">
                <div class="news-search-wrapper">
                    <p>I'm NewsFeed</p>
                </div>
                <div class="news-feed">
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                </div>
            </div>
        );
    }
}

export default NewsFeed;