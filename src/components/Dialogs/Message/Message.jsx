import React from 'react'
import s from '../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={s.message}>
            <div>
                <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="" />
            </div>
            <div className={s.messageItem}>
                {props.message}
            </div>
        </div>
    )
}

export default Message