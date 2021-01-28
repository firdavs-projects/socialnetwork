import React from 'react'
import { connect } from 'react-redux';
import { loginMe, authMe } from '../../Redux/authReducer';
import LoginReduxForm from './LoginForm/LoginForm'

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginMe(formData)
        props.authMe()
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mstp = (state) => ({
    login: state.form.login
})

export default connect(mstp, {
    loginMe,
    authMe
})(Login) 
