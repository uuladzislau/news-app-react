import React, {Component} from "react"

import '../styles/Header.css'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <header>
                <h1>News React Application</h1>
            </header>
        );
    }
}

export default Header;