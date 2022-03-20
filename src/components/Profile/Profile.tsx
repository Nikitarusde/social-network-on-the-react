import React from 'react';
// @ts-ignore
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostData} from "../../index";


type Profile = {
    postData: Array<PostData>;
};

export function Profile(props: Profile) {


    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.postData}/>
        </div>
    );
}

