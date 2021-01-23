import React from 'react'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
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
                    <textarea name=""></textarea><br />
                    <button>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs