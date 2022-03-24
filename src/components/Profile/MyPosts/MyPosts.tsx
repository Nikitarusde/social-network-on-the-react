import React from 'react';
// @ts-ignore
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostData} from "../../../redux/state";


type MyPosts = {
    postData: Array<PostData>,
}

export function MyPosts(props: MyPosts) {

    // @ts-ignore
    let postElement = props.postData.map(m=> <Post  id={m.id} massage={m.message}likesCounter={m.likesCount} />)

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

