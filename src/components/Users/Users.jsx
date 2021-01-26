import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Users.module.css'

const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>

            <div>
                {
                    pages.map(p => {
                        return <span key={p}
                            onClick={(ev) => { props.onPageChange(p) }}
                            className={props.currentPage === p ? styles.selectedPage : styles.pages}>{p}</span>
                    })
                }
            </div>

            {
                props.users.map(u => (
                    <div className={styles.user} key={u.id}>
                        <NavLink
                            to={'/profile/' + u.id}
                        >
                            <div className={styles.imgBlock}>
                                <img className={styles.photo} src={u.photos.small !== null
                                    ? u.photos.small
                                    : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'}
                                    alt={u.name} />
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                            </div>

                        </NavLink>
                        <div className={styles.btnBlock}>
                            {u.followed
                                ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "8ac421a0-04c1-432d-80ca-1dcc953182a0"
                                            }
                                        })
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })


                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "8ac421a0-04c1-432d-80ca-1dcc953182a0"
                                            }
                                        })
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })


                                }}>Follow</button>
                            }
                        </div>

                    </div>
                ))
            }
        </div >
    )
}

export default Users