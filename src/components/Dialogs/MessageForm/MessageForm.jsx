import React from 'react'
import { Field, reduxForm } from 'redux-form'

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea"
                    name="newMessageBody"
                    placeholder="Enter your message"
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form: "dialogAddMessageForm"
})(MessageForm)

export default MessageReduxForm
