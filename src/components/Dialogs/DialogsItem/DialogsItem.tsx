// @ts-ignore
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsItemType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogsItemType) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}