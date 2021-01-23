import React from 'react'

const Friend = (props) => {
    return (
        <div>
            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="" />
            <div>{props.name}</div>
        </div>
    )
}

export default Friend
