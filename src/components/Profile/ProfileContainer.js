import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfile } from '../../Redux/profileReducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
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

const authRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

const withUrlProfileContainer = withRouter(authRedirectComponent)

export default connect(mapStateToProps, {getProfile})(withUrlProfileContainer)