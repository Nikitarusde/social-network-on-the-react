import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";
import {State, updateNewPostText} from "./redux/state";




type AppType = {
    state: State
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

function App(props: AppType) {
    // @ts-ignore
    return (
        <BrowserRouter>
            <div className={"app"}>
                <Header/>
                <NavBar/>

                    <div className={"content"}>
                        <Route path="/profile" component={ () =>
                            <Profile
                            state={props.state}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                            />}/>
                        <Route path="/messages" component={ () => <Dialogs
                            state={props.state}/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>

                    </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
