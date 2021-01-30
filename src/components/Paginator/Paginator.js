import React from 'react'
import styles from './Paginator.module.css'

export const Paginator = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map(p => {
                    return <span key={p}
                        onClick={(ev) => { props.onPageChange(p) }}
                        className={props.currentPage === p
                            ? styles.selectedPage
                            : styles.pages}>{p}</span>
                })
            }
        </div>
    )
}



