import React from 'react';
// @ts-ignore
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsData, MessagesData} from "../../index";

type Dialogs = {
    dialogsData: Array<DialogsData>
    messagesData: Array<MessagesData>
}

export const Dialogs = (props: Dialogs) => {


    let dialogsElement = props.dialogsData.map(m=> <DialogItem name={m.name} id={m.id}/>)
    let messagesElement = props.messagesData.map(m=> <Message text={m.text} />)


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}

                {/*<DialogItem name={"Nikita"} id={1}/>*/}
                {/*<DialogItem name={"Dima"} id={2}/>*/}
                {/*<DialogItem name={"Igor"} id={3}/>*/}
                {/*<DialogItem name={"Sveta"} id={4}/>*/}
                {/*<DialogItem name={"Dasha"} id={5}/>*/}
            </div>
            <div className={classes.messages}>

                {messagesElement}
                {/*<Message text={"Hey Bro"}/>*/}
                {/*<Message text={"How are your study?"}/>*/}
                {/*<Message text={"How yot get a some time on Thursday?"}/>*/}
            </div>

        </div>
    );
};
