import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div>
                <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="" />
            </div>
            {props.post}
            <div>
                Likes: {props.likes}
                <span>Like</span>
                <span> Dislike</span>
            </div>
        </div>
    )
}

export default Post
