import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"

import App from "./components/App.js"
import * as theme from "./config/theme"

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>,
    document.getElementById("root")
);