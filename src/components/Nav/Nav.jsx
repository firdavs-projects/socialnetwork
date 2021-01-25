import React from 'react'
import { NavLink } from 'react-router-dom'
// import Friend from './Friends/Friend'
import s from './Nav.module.css'

const Nav = () => {
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
          <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
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
      </nav>
      <hr />


      {/*<div>
        Histories
      </div>
       <StoreContext.Consumer>{
        (store) => {
          return (
            <div className={s.friends}>
              {store.getState().sideBar.friends.map(o => <Friend name={o.name} key={Math.random()} />)}
            </div>
          )
        }
      }
      </StoreContext.Consumer>
      <hr /> */}

    </>
  )
}

export default Nav
