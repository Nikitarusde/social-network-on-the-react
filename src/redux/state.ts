import {rerenderEntireTree} from "../render";

export type PostData = {
    id: number,
    message: string,
    likesCount: number,
}

export type DialogsData = {
    id: number,
    name: string,
}

export type MessagesData = {
    id: number,
    text: string,
}


export type State = {
    profilePage: {
        postData: Array<PostData>,
    }
    messagesPage: {
        dialogsData:  Array<DialogsData>,
        messagesData: Array<MessagesData>,
    }
}



export let state: State = {
    profilePage: {
        postData: [
            {id: 1, message: "How are you?", likesCount: 12},
            {id: 1, message: "It is my first project", likesCount: 2},
            {id: 1, message: "I would be to make social network", likesCount: 54},
        ],
    },

    messagesPage: {
        dialogsData: [
            {id: 1, name: "Nikita"},
            {id: 2, name: "Dima"},
            {id: 3, name: "Igor"},
            {id: 4, name: "Sveta"},
            {id: 5, name: "Dasha"},
        ],
        messagesData: [
            {id: 1, text: "Hey Bro"},
            {id: 2, text: "How are your study?"},
            {id: 3, text: "How yot get a some time on Thursday?"},
        ],
    },
}
export let addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 3,
    }
    state.profilePage.postData.push(newPost);


    rerenderEntireTree(state)
}
