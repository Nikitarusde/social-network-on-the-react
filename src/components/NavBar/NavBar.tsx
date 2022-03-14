import React from 'react';
// @ts-ignore
import classes from "./NavBar.module.css"



export function NavBar() {
  return (
      <div className={classes.navBar}>
          <div className={'{classes.item}{classes.item-activ}'}>
              <a href="/profile">Profile</a>
          </div>
          <div className={classes.item}>
              <a href="/messages">Messages</a>
          </div>
          <div className={classes.item}>
              <a href="/news">News</a>
          </div>
          <div className={classes.item}>
              <a href="/music">Music</a>
          </div>
          <div className={classes.item}>
              <a href="/settings">Settings</a>
          </div>
      </div>
  );
}

