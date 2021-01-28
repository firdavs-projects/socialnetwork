import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../Utils/Validators/validator'
import { Textarea } from '../../FormControls/Controls'

const maxLength100 = maxLengthCreator(100)

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLength100]}
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
