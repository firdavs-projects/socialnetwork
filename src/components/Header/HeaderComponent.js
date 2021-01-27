import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { authMe } from '../../Redux/authReducer'

class HeaderComponent extends Component {

    componentDidMount() {
        this.props.authMe()
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

export default connect(mapStateToProps, { authMe })
    (HeaderComponent)