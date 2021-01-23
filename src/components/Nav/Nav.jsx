import React from 'react'
import { NavLink } from 'react-router-dom'
import Friend from './Friends/Friend'
import s from './Nav.module.css'

const Nav = (props) => {
  return (
    <>
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/">News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/">Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/">Settings</NavLink>
        </div>
        <hr />
        <div>
          <h3>Friends</h3>
        </div>
        <div className={s.friends}>

          {props.state.friends.map(o => <Friend name={o.name} key={Math.random()} />)}
        </div>
      </nav>
    </>
  )
}

export default Nav
