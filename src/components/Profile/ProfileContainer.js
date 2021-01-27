import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfile } from '../../Redux/profileReducer'
import { withRouter } from 'react-router-dom'
// import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'

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


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, { getProfile }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)