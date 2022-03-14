import React from 'react';
// @ts-ignore
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export function MyPosts() {
  return (
      <div>
          My posts
          <div>
              <textarea></textarea>
              <button>Add post</button>
          </div>
          <Post massage={"How are you?"}/>
          <Post massage={"It is my first project"}/>
          <Post massage={"I would be to make social network"}/>
      </div>
  );
}

