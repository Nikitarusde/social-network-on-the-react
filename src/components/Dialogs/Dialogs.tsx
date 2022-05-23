import React, {ChangeEvent} from 'react';
// @ts-ignore
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {State} from "../../redux/state";
import {ActionDialogs, sendMessageAC, updateNewMessageBodyAC} from "../../redux/messages-reducer";
import {ActionsTypes} from "../../redux/profile-reducer";

type Dialogs = {
    state: State
    dispatch: (action: ActionsTypes | ActionDialogs) => void
}

export const Dialogs = (props: Dialogs) => {


    let dialogsElement = props.state.messagesPage.dialogsData.map(m => <DialogItem name={m.name} id={m.id}/>)
    let messagesElement = props.state.messagesPage.messagesData.map(m => <Message text={m.text}/>)
    let newMessageBody = props.state.messagesPage.newMessageBody

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       let body = e.currentTarget.value;
        props.dispatch(updateNewMessageBodyAC(body))
    }
    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea
                            onChange={onNewMessageChange}
                            value={newMessageBody}
                            placeholder={"Enter your message"}>
                        </textarea>
                    </div>
                    <div>
                        <button
                            onClick={onSendMessageClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};
