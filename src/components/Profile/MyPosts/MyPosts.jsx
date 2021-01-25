import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (ev) => {
        const text = ev.target.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {props.posts.map(o => <Post key={o.id} post={o.post} likes={o.likes} />)}
            </div>
        </div>
    )
}

export default MyPosts
