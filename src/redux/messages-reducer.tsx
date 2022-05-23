
// @ts-ignore
export const messagesReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state;
        case "SEND-MESSAGE":
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messagesData.push({id: 6, text: body})
            return state;
        default: return state;
    }


    //
    // if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
    //     state.newMessageBody = action.body
    // } else if (action.type === "SEND-MESSAGE") {
    //     let body = state.newMessageBody
    //     state.newMessageBody = ""
    //     state.messagesData.push({id: 6, text: body})
    // }
    //
    // return state
}