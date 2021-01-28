import React from 'react'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import MessageReduxForm from './MessageForm/MessageForm'

const Dialogs = (props) => {

    const onSubmit = (formData) => {
        props.sendMessage(formData.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {
                    props.dialogsPage.dialogs.map(o => <Dialog key={o.id} name={o.name} id={o.id} />)
                }
                <hr />
            </div>
            <div >
                <div className={s.messages}>
                    {
                        props.dialogsPage.messages.map(o => <Message key={o.id} message={o.message} />)
                    }
                    <hr />
                </div>
                <div className={s.absolute}>
                    <div className={s.newmessage}>

                        <MessageReduxForm onSubmit={onSubmit} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs