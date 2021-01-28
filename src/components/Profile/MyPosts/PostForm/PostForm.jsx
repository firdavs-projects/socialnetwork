import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../../Utils/Validators/validator'
import { Textarea } from '../../../FormControls/Controls'

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required, maxLength10]}
                    name="newPostText"
                    placeholder="Enter your text"
                    component={Textarea} />
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
