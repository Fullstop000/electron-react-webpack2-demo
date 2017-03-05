import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './scripts/App'

function render() {
    ReactDOM.render(
        <App message={"123123"}/>,
        app
    )
}

/** HMR support */
if (module.hot) {
    module.hot.accept();
    render()
} else {
    render()
}