import React from 'react';
// @ts-ignore
import classes from "./Header.module.css"



export function Header() {
  return (
      <div className={classes.header}>
          <img  className={classes.image} src="https://images.vexels.com/media/users/3/183377/isolated/lists/dd5420a686b784e84860008e8581c6ea-cactus-icon.png" alt=""/>
      </div>
  );
}

