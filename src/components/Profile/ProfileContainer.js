import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfile, getStatus, updateStatus } from '../../Redux/profileReducer'
import { withRouter } from 'react-router-dom'
// import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends Component {

    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
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
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)