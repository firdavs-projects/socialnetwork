import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const withAuthRedirect = (Componenta) => {
    class RedirectComponent extends Component {
        render() {
            if (!this.props.isAuth)
                return <Redirect to='/login' />

            return <Componenta{...this.props} />
        }
    }

    const mapStateToPropsRedirect = (state) => ({
        isAuth: state.auth.isAuth
    })

    let connectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return connectAuthRedirectComponent
}