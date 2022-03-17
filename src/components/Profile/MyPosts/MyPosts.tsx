import React from 'react';
// @ts-ignore
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export function MyPosts() {
    let postData = [
        {id: 1, message: "How are you?", likesCount: 12 },
        {id: 1, message: "It is my first project", likesCount: 2 },
        {id: 1, message: "I would be to make social network", likesCounter: 54 },
    ]

    // @ts-ignore
    let postElement = postData.map(m=> <Post massage={m.message} id={m.id} />)

  return (
      <div>
          My posts
          <div>
              <textarea></textarea>
              <button>Add post</button>
          </div>
          {postElement}
          {/*<Post massage={"How are you?"}/>*/}
          {/*<Post massage={"It is my first project"}/>*/}
          {/*<Post massage={"I would be to make social network"}/>*/}
      </div>
  );
}

