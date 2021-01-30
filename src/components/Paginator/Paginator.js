import React, { useState } from 'react'
import styles from './Paginator.module.css'

export const Paginator = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / props.portionSize)
    
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortion = (portionNumber - 1) * props.portionSize + 1;
    const rightPortion = portionNumber * props.portionSize

    return (
        <div>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}
                >Prev</button>}
            {
                pages
                    .filter(p => p >= leftPortion && p <= rightPortion)
                    .map(p => {
                        return <span key={p}
                            onClick={(ev) => { props.onPageChange(p) }}
                            className={props.currentPage === p
                                ? styles.selectedPage
                                : styles.pages}>{p}</span>
                    })
            }
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}
                >Next</button>}
        </div>
    )
}