import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/state'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
    const newMessageBody = props.state.newMessageBody

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (ev) => {
        const body = ev.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {
                    props.state.dialogs.map(o => <Dialog key={o.id} name={o.name} id={o.id} />)
                }
            </div>
            <div >
                <div className={s.messages}>
                    {
                        props.state.messages.map(o => <Message key={o.id} message={o.message} />)
                    }
                </div>
                <hr />
                <div>
                    <div>
                        <textarea
                            onChange={onNewMessageChange}
                            value={newMessageBody}
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs