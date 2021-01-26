import React, { Component } from 'react'
import styles from './Users.module.css'
import axios from 'axios'

class Users extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)

            })


    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

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
                                onClick={(ev) => { this.onPageChange(p) }}
                                className={this.props.currentPage === p && styles.selectedPage}>{p}</span>
                        })
                    }
                </div>

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
