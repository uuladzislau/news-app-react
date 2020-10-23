import React, {Component} from "react"

import '../styles/News.css'

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <div class="news-container">
                <p>I'm a News</p>
            </div>
        );
    }
}

export default News;