import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    getUsers,
    unfollowUser,
    followUser,
} from '../../Redux/usersReducer'
import Users from './Users'
import Loader from '../Loader/Loader'
import { getUsersSuperSelector, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getSetIsFetching, getTotalUsersCount } from '../../Redux/usersSelectors'

class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (page) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Loader /> : null}
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                    unfollowUser={this.props.unfollowUser}
                    followUser={this.props.followUser}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        setIsFetching: getSetIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps, {
    getUsers,
    unfollowUser,
    followUser
})(UsersContainer)