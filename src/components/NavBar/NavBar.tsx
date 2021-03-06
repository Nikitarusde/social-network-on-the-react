import React from 'react';
// @ts-ignore
import classes from "./NavBar.module.css"
import {NavLink} from "react-router-dom";


export function NavBar() {
  return (
      <div className={classes.navBar}>
          <div className={classes.item}>
              <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
          </div>
          <div className={classes.item}>
              <NavLink to="/messages" activeClassName={classes.active}>Messages</NavLink>
          </div>
          <div className={classes.item}>
              <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
          </div>
          <div className={classes.item}>
              <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
          </div>
          <div className={classes.item}>
              <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
          </div>
      </div>
  );
}

