import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = (ev) => {
        const text = ev.target.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {props.posts.map(o => <Post key={o.id} post={o.post} likes={o.likes} />)}
            </div>
        </div>
    )
}

export default MyPosts
