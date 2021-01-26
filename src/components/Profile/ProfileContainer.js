import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserProfile } from '../../Redux/profileReducer'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends Component {

    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : 2}`)
            .then(res => {
                this.props.setUserProfile(res.data)
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