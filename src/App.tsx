import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {NavBar} from "./NavBar/NavBar";
import {Content} from "./Content/Content";

function App() {
    return (
        <div className={"app"}>
            <Header/>
            <NavBar/>
            <Content/>
        </div>
    )
        ;
}


export default App;
