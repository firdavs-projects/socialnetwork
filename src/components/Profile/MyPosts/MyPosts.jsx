import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import PostReduxForm from './PostForm/PostForm'

const MyPosts = (props) => {

    const onAddPost = (post) => {
        console.log(post);
        props.addPost(post.newPostText)
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>

            <PostReduxForm onSubmit={onAddPost} />

            <div className={s.posts}>
                {props.profilePage.posts.map(o => <Post key={o.id} post={o.post} likes={o.likes} />)}
            </div>
        </div>
    )
}

export default MyPosts
