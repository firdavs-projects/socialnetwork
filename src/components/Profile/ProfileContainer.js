import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserProfile } from '../../Redux/profileReducer'
import { withRouter } from 'react-router-dom'
import { profileAPI } from '../../API/api'

class ProfileContainer extends Component {

    componentDidMount() {
        profileAPI.getProfile(this.props.match.params.userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
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
    profile: state.profilePage.profile
})

const withUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile
})(withUrlProfileContainer)