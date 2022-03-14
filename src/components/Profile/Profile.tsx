import React from 'react';
// @ts-ignore
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";


export function Profile() {
  return (
      <div>
          <img className={classes.backGround} src="https://st4.depositphotos.com/3254215/22605/v/450/depositphotos_226056776-stock-illustration-desert-landscape-cactus-vector-flat.jpg" alt=""/>
          <div>avatar + description</div>

          <MyPosts/>
      </div>
  );
}

