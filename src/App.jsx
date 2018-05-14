import React, { Component } from 'react';
import { Window, TitleBar } from 'react-desktop/windows';
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainMenu from "./components/nav/MainMenu";

// const electron = window.require("electron") // little trick to import electron in react
//const ipcRenderer = electron.ipcRenderer


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Window>
                <TitleBar theme="dark" title="Campaign Ratings" controls />
                <BrowserRouter>
                    <MainMenu />
                </BrowserRouter>
            </Window>
        )
    }
}

export default App;
