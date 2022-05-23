
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

export type ActionDialogs = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>


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