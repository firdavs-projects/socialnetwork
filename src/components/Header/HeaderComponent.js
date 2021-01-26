import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setUserData } from '../../Redux/authReducer'

class HeaderComponent extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    const { id, login, email } = res.data.data
                    this.props.setUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <div>
                <Header auth={this.props.auth} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {
    setUserData
})(HeaderComponent)