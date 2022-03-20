import React from 'react';
// @ts-ignore
import classes from "./Post.module.css"

type PostProps = {
    massage?: string
    likesCounter: number
}

export function Post(props: PostProps) {
    return (
        <div>
            <img className={classes.avatar}
                src="https://img.freepik.com/vetores-gratis/avatar-de-polvo-vermelho-bonito_79416-77.jpg"
                alt=""/>
            {props.massage} {props.likesCounter}
        </div>
    );
}

