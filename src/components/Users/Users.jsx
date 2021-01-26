import React from 'react'
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
                            className={props.currentPage === p && styles.selectedPage}>{p}</span>
                    })
                }
            </div>

            {
                props.users.map(u => (
                    <div className={styles.user} key={u.id}>
                        <span>
                            <div className={styles.imgBlock}>
                                <img className={styles.photo} src={u.photos.small !== null
                                    ? u.photos.small
                                    : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'}
                                    alt={u.name} />
                            </div>
                            <div className={styles.btnBlock}>
                                <button onClick={() => { props.follow(u.id) }}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default Users