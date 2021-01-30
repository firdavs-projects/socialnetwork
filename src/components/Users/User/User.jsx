import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Users.module.css'

const User = ({ user, followingInProgress, unfollowUser, followUser }) => {
    return (
        <div className={styles.user}>
            <NavLink
                to={'/profile/' + user.id}
            >
                <div className={styles.imgBlock}>
                    <img className={styles.photo}
                        src={user.photos.small !== null
                            ? user.photos.small
                            : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'}
                        alt={user.name} />
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </div>
            </NavLink>
            <div className={styles.btnBlock}>
                {user.followed
                    ? <button disabled={followingInProgress
                        .some(id => id === user.id)}
                        onClick={() => {
                            unfollowUser(user.id)
                        }}>Unfollow</button>

                    : <button disabled={followingInProgress
                        .some(id => id === user.id)}
                        onClick={() => {
                            followUser(user.id)
                        }}>Follow</button>
                }
            </div>
        </div>
    )
}

export default User