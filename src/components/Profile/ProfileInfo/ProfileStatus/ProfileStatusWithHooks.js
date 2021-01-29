import React, { useEffect, useState } from 'react'

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activeEditMode = () => {
        setEditMode(true)
    }

    const deactiveEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const changeStatus = (ev) => {
        const newStatus = ev.target.value;
        setStatus(newStatus)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div>
            {
                editMode
                    ? <div>
                        <input autoFocus={true}
                            onBlur={deactiveEditMode}
                            onChange={changeStatus}
                            value={status} />
                    </div>
                    : <div>
                        <span
                            onClick={activeEditMode}
                        >{props.status || 'no status'}</span>
                    </div>
            }
        </div >
    )
}

export default ProfileStatusWithHooks