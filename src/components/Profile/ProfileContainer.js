import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfile } from '../../Redux/profileReducer'
import { Redirect, withRouter } from 'react-router-dom'

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
    }

    render() {

        if (!this.props.isAuth) {
            return <Redirect to='/login' />
        }

        return (
            <div>
                <Profile {...this.props}
                    profile={this.props.profile}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const withUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getProfile
})(withUrlProfileContainer)