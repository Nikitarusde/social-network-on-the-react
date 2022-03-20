// @ts-ignore
import classes from "./../Dialogs.module.css";
import React from "react";

type MassageType = {
    text: string
}

export const Message = (props: MassageType) => {
    return (
        <div className={classes.message}>{props.text}</div>
    )
}
