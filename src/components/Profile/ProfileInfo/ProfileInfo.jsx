import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.backPhoto} src="https://kam-inform.com/wp-content/uploads/2017/11/17-11-02-cRAW-DSC07117_1.jpg" alt="" />
            </div>
            <div className={s.description}>
                <img src="https://previews.123rf.com/images/anatolir/anatolir1712/anatolir171201477/91833942-man-avatar-icon-flat-illustration-of-man-avatar-vector-icon-isolated-on-white-background.jpg" alt="" />
                <div>
                    Firdavs Abdulloev
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
