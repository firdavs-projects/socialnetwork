import React from 'react'
import { Paginator } from '../Paginator/Paginator'
import User from './User/User'

const Users = (props) => {

    return (
        <div>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                onPageChange={props.onPageChange}
                currentPage={props.currentPage}
            />

            {
                props.users.map(u => (
                    <User user={u} key={u.id}
                        followingInProgress={props.followingInProgress}
                        unfollowUser={props.unfollowUser}
                        followUser={props.followUser}
                    />
                ))
            }
        </div >
    )
}

export default Users