import React, { Component } from 'react'
import styles from './Users.module.css'
import axios from 'axios'

class Users extends Component {

    componentDidMount() {
        const usersUrl = 'https://social-network.samuraijs.com/api/1.0/users'
        axios.get(usersUrl)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => (
                        <div className={styles.user} key={u.id}>
                            <span>
                                <div className={styles.imgBlock}>
                                    <img className={styles.photo} src={u.photos.small !== null
                                        ? u.photos.small
                                        : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'}
                                        alt={u.name} />
                                </div>
                                <div className={styles.btnBlock}>
                                    <button onClick={() => { this.props.follow(u.id) }}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                {/* <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span> */}
                            </span>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Users
