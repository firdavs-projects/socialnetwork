import React from 'react'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
    const newMessageBody = props.state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (ev) => {
        const body = ev.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {
                    props.state.dialogs.map(o => <Dialog key={o.id} name={o.name} id={o.id} />)
                }
                <hr />
            </div>
            <div >
                <div className={s.messages}>
                    {
                        props.state.messages.map(o => <Message key={o.id} message={o.message} />)
                    }
                    <hr />
                </div>
                <div className={s.absolute}>
                    <div className={s.newmessage}>
                        <textarea className={s.textarea}
                            onChange={onNewMessageChange}
                            value={newMessageBody}
                            placeholder="Enter your message"
                        ></textarea>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs