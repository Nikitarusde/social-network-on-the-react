import React, {ChangeEvent} from 'react';
// @ts-ignore
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostData} from "../../../redux/state";


type MyPosts = {
    postData: Array<PostData>,
    addPost: (postMessage: string) => void,
}

export function MyPosts(props: MyPosts) {

    // @ts-ignore
    let postElement = props.postData.map(m=> <Post  id={m.id} massage={m.message}likesCounter={m.likesCount} />)

    let newPostElement = React.createRef() as React.MutableRefObject<HTMLTextAreaElement>

    let addPost = ( ) => {
        // @ts-ignore
        let text = newPostElement.current.value
        props.addPost(text)
    }
    // @ts-ignore
  return (
      <div>
          My posts
          <div>
              <textarea ref={newPostElement}></textarea>
              <button onClick={addPost}>Add post</button>
          </div>
          {postElement}
      </div>
  );
}

