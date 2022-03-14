import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    // @ts-ignore
    return (
        <BrowserRouter>
            <div className={"app"}>
                <Header/>
                <NavBar/>

                    <div className={"content"}>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/messages" component={Dialogs}/>
                    </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
