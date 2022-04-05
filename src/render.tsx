import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {State, updateNewPostText} from "./redux/state";
import {addPost} from "./redux/state";


export let rerenderEntireTree = (state: State) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );
}
