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
import {DialogsData, MessagesData, PostData} from "./index";




type AppType = {
    postData: Array<PostData>,
    dialogsData: Array<DialogsData>
    messagesData: Array<MessagesData>
}

function App(props: AppType) {
    // @ts-ignore
    return (
        <BrowserRouter>
            <div className={"app"}>
                <Header/>
                <NavBar/>

                    <div className={"content"}>
                        <Route path="/profile" component={ () => <Profile postData={props.postData}/>}/>
                        <Route path="/messages" component={ () => <Dialogs
                            dialogsData={props.dialogsData}
                            messagesData={props.messagesData}/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>

                    </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
