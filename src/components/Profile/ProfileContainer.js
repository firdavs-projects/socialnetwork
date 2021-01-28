import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfile, getStatus, updateStatus } from '../../Redux/profileReducer'
import { withRouter } from 'react-router-dom'
// import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'
import Loader from '../Loader/Loader'

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
        }

        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        if (!this.props.profile) {
            return <Loader />
        }
        return (
            <div>
                <Profile {...this.props}
                    status={this.props.status}
                    profile={this.props.profile}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)