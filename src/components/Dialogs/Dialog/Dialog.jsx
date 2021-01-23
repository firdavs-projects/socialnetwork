import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Dialogs.module.css'

const Dialog = (props) => {
    return (
        <div>
            <NavLink activeClassName={s.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog