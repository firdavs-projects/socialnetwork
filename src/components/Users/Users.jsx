import React from 'react'
import styles from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0)
        props.setUsers([
            { id: 1, photoUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', followed: false, fullName: 'Firdavs', status: 'I`m Cool', location: { city: 'Khujand', country: 'Tajikistan' } },
            { id: 2, photoUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', followed: true, fullName: 'Dima', status: 'I`m Cool too', location: { city: 'Moscow', country: 'Russia' } },
        ])

    return (
        <div>
            {
                props.users.map(u => (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img className={styles.photo} src={u.photoUrl} alt="" />
                            </div>
                            <div>
                                <button onClick={() => { props.follow(u.id) }}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default Users
