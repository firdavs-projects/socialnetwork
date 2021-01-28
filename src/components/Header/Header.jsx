import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <NavLink to={'/'}>
                <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />
            </NavLink>
            <h3>social network</h3>
            <div className={s.loginBlock}>
                {props.auth.isAuth
                    ? <><NavLink to={'/profile'}>{props.auth.login}</NavLink><div><button onClick={props.logoutMe}>Exit</button></div> </>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header
