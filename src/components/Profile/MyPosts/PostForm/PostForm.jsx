import React from 'react'
import { Field, reduxForm } from 'redux-form'

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText"
                    placeholder="Enter your text"
                    component="textarea" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>)
}

const PostReduxForm = reduxForm({
    form: "profileAddNewPostForm"
})(PostForm)

export default PostReduxForm
