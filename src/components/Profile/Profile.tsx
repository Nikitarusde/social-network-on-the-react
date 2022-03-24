import React from 'react';
// @ts-ignore
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {State} from "../../redux/state";


type Profile = {
   state: State
};

export function Profile(props: Profile) {


    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.state.profilePage.postData}/>
        </div>
    );
}

