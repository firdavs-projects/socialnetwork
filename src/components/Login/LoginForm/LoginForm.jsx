import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../../Utils/Validators/validator'
import { Input } from '../../FormControls/Controls'
import styles from '../../FormControls/Controls.module.css'


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Email' name={"email"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field type='password' placeholder='Password' name={"password"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input} />remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>
                <span>{props.error}</span>
            </div>}
            <div >
                <button>Login</button>
            </div>
        </form>)
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
export default LoginReduxForm
