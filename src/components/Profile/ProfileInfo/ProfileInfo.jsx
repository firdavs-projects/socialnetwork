import React from 'react'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.description}>
                <img src={props.profile.photos.large} alt="" />
                <div className={s.name}>
                    {props.profile.fullName}
                </div>
                <ProfileStatusWithHooks
                    updateStatus={props.updateStatus}
                    status={props.status}
                />

                <div>
                    {'About Me: ' + props.profile.aboutMe}
                </div>
                <span>
                    {props.profile.lookingForAJob ? '#Open to work' : '#Has work'}
                </span>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
                Social Links
                <div className={s.links}>
                    {props.profile.contacts.facebook && <a href={props.profile.contacts.facebook}>Facebook</a>}
                    {props.profile.contacts.vk && <a href={props.profile.contacts.vk}>Vkontakte</a>}
                    {props.profile.contacts.twitter && <a href={props.profile.contacts.twitter}>Twitter</a>}
                    {props.profile.contacts.instagram && <a href={props.profile.contacts.instagram}>Instagram</a>}
                    {props.profile.contacts.instagram && <a href={props.profile.contacts.instagram}>Instagram</a>}
                    {props.profile.contacts.youtube && <a href={props.profile.contacts.youtube}>Youtube</a>}
                    {props.profile.contacts.github && <a href={props.profile.contacts.github}>Github</a>}
                    {props.profile.contacts.mainLink && <a href={props.profile.contacts.mainLink}>MainLink</a>}

                </div>
            </div>
        </div >
    )
}

export default ProfileInfo
