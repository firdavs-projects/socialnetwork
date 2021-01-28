import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginMe } from '../../Redux/authReducer';
import LoginReduxForm from './LoginForm/LoginForm'

const Login = (props) => {
    const onSubmit = ({ email, password, rememberMe }) => {
        props.loginMe(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mstp = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mstp, { loginMe })(Login) 
