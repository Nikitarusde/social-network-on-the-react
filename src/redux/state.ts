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
    }
}


export type StoreType = {
    _state: State,
    subscribe: (observer: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => State
    dispatch: (action: ActionsTypes) => void
}


export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>

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
            ],
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
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 3,
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._rerenderEntireTree()
        } else if (action.type === "CHANGE-NEW-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree()
        }
    }
}


