import React from 'react';
// @ts-ignore
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


type DialogsItemType = {
    name: string
    id: number
}

const DialogItem = (props: DialogsItemType) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MassageType = {
    text: string
}

const Message = (props: MassageType) => {
    return (
            <div className={classes.message}>{props.text}</div>
    )
}


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={"Nikita"} id={1}/>
                <DialogItem name={"Dima"} id={2}/>
                <DialogItem name={"Igor"} id={3}/>
                <DialogItem name={"Sveta"} id={4}/>
                <DialogItem name={"Dasha"} id={5}/>
            </div>
            <div className={classes.messages}>
                <Message text={"Hey Bro"}/>
                <Message text={"How are your study?"}/>
                <Message text={"How yot get a some time on Thursday?"}/>
            </div>

        </div>
    );
};
