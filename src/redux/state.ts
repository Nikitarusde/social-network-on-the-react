import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";

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
        newPostText: string,
    }
    messagesPage: {
        dialogsData: Array<DialogsData>,
        messagesData: Array<MessagesData>,
        newMessageBody: string,
    }
}


export type StoreType = {
    _state: State,
    subscribe: (observer: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => State
    dispatch: (action: ActionsTypes | ActionDialogs) => void
}


export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>
export type ActionDialogs = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>

export const addPostAC = (newPostText: string) => {
    return{
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return{
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return{
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}
export const sendMessageAC = () => {
    return{
        type: "SEND-MESSAGE",
    } as const
}

export let store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "How are you?", likesCount: 12},
                {id: 1, message: "It is my first project", likesCount: 2},
                {id: 1, message: "I would be to make social network", likesCount: 54},
            ],
            newPostText: "Nikita-Samurai",
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
                {id: 4, text: "How yot get a some time on Thursday?"},

            ],
            newMessageBody: ""
        },
    },
    _rerenderEntireTree()  {
        console.log("State rerender")
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        // @ts-ignore
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        // @ts-ignore
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)

        this._rerenderEntireTree()

        // if (action.type === "ADD-POST") {
        //     let newPost = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 3,
        //     }
        //     this._state.profilePage.postData.push(newPost);
        //     this._state.profilePage.newPostText = "";
        //     this._rerenderEntireTree()
        // } else if (action.type === "CHANGE-NEW-TEXT") {
        //     this._state.profilePage.newPostText = action.newText
        //     this._rerenderEntireTree()
        // } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
        //     this._state.messagesPage.newMessageBody = action.body
        //     this._rerenderEntireTree()
        // } else if (action.type === "SEND-MESSAGE") {
        //     let body = this._state.messagesPage.newMessageBody
        //     this._state.messagesPage.newMessageBody = ""
        //     this._state.messagesPage.messagesData.push({id: 6, text: body})
        //     this._rerenderEntireTree()
        // }
    }
}


