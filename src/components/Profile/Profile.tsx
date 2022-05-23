import React from 'react';
// @ts-ignore
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {State} from "../../redux/state";
import {ActionsTypes} from "../../redux/profile-reducer";


type Profile = {
    state: State
    // addPost: (postMessage: string) => void,
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
};

export function Profile(props: Profile) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}
                     dispatch={props.dispatch}
                     // addPost={props.addPost}
                     // updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

