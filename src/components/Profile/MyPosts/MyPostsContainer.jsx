import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                const state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                const onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }

                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />)
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer