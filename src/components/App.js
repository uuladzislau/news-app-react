import React, {Component} from "react"
import Header from "./Header"
import NewsFeed from "./NewsFeed"

import '../styles/App.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    render() {
        return (
            <div class="app-container">
                <Header />
                <NewsFeed />
            </div>
        );
    }
}

export default App;