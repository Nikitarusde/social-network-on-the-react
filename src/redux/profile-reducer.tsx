
// @ts-ignore
export const profileReducer = (state, action) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 3,
            }
            state.postData.push(newPost);
            state.newPostText = "";
            return state;
        case  "CHANGE-NEW-TEXT":
            state.newPostText = action.newText
            return state;
        default: return state;
    }
    // if (action.type === "ADD-POST") {
    //     let newPost = {
    //         id: 5,
    //         message: state.newPostText,
    //         likesCount: 3,
    //     }
    //     state.postData.push(newPost);
    //     state.newPostText = "";

    // } else if (action.type === "CHANGE-NEW-TEXT") {
    //     state.newPostText = action.newText
    // }

    // return state
}