import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderComponent from './components/Header/HeaderComponent';
import Login from './components/Login/Login';
import { initializeApp } from './Redux/appReducer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Loader from './components/Loader/Loader';
import store from './Redux/reduxStore'

class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />
    }

    return (
      <div className='app-wrapper'>

        <HeaderComponent />
        <Nav />

        <div className='app-wrapper-content'>

          <Route path='/dialogs'>
            <DialogsContainer />
          </Route>

          <Route path='/profile/:userId?'>
            <ProfileContainer />
          </Route>

          <Route path='/users'>
            <UsersContainer />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

        </div>

      </div>
    );
  }
}

const mstp = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mstp, { initializeApp })
)(App);

const MainApp = (props) => {
  return <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>
}
export default MainApp