import React, {ChangeEvent} from 'react';
// @ts-ignore
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionsTypes, State} from "../../../redux/state";


type MyPosts = {
    state: State,
    dispatch: (action: ActionsTypes) => void,
    // addPost: (postMessage: string) => void,
    // updateNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPosts) {

    // @ts-ignore
    let postElement = props.state.profilePage.postData.map(m=> <Post  id={m.id} massage={m.message}likesCounter={m.likesCount} />)

    let newPostElement = React.createRef() as React.MutableRefObject<HTMLTextAreaElement>

    let addPost = ( ) => {
        // @ts-ignore
        props.dispatch({type: "ADD-POST"})
    }

    let onChangeTextarea = () => {
        let text = newPostElement.current.value
        props.dispatch({type: "CHANGE-NEW-TEXT", newText: text})
    }
    // @ts-ignore
  return (
      <div>
          My posts
          <div>
              <textarea ref={newPostElement} onChange={onChangeTextarea} value={props.state.profilePage.newPostText}></textarea>
              <button onClick={addPost}>Add post</button>
          </div>
          {postElement}
      </div>
  );
}

