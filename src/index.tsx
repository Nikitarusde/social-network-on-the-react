import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostData = {
    id: number,
    message: string,
    likesCount: number,
}

let postData: Array<PostData> = [
    {id: 1, message: "How are you?", likesCount: 12},
    {id: 1, message: "It is my first project", likesCount: 2},
    {id: 1, message: "I would be to make social network", likesCount: 54},
]

export type DialogsData = {
    id: number,
    name: string,
}

let dialogsData: Array<DialogsData> = [
    {id: 1, name: "Nikita"},
    {id: 2, name: "Dima"},
    {id: 3, name: "Igor"},
    {id: 4, name: "Sveta"},
    {id: 5, name: "Dasha"},
]

export type MessagesData = {
    id: number,
    text: string,
}

let messagesData = [
    {id: 1, text: "Hey Bro"},
    {id: 2, text: "How are your study?"},
    {id: 3, text: "How yot get a some time on Thursday?"},
]

ReactDOM.render(
    <App
        postData={postData}
        dialogsData={dialogsData}
        messagesData={messagesData}
    />,
  document.getElementById('root')
);