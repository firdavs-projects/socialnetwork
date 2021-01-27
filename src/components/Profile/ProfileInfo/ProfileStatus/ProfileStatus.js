import React, { useState } from 'react'

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)

    const EditMode = () => {
        setEditMode(!editMode)
    }

    return (
        <div>
            {
                editMode
                    ? <div>
                        <input autoFocus={true} onBlur={EditMode} value={props.status} />
                    </div>
                    : <div>
                        <span onClick={EditMode}>{props.status}</span>
                    </div>
            }
        </div>
    )
}

export default ProfileStatus