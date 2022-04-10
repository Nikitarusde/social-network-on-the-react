import React from 'react';
// @ts-ignore
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {State, StoreType} from "../../redux/state";


type Profile = {
    state: State
    addPost: (postMessage: string) => void,
    updateNewPostText: (newText: string) => void
};

export function Profile(props: Profile) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

