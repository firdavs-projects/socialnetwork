import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav state={props.state.sideBar} />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'>
            <Dialogs
              dispatch={props.dispatch}
              state={props.state.dialogsPage} />
          </Route>
          <Route path='/profile'>
            <Profile
              state={props.state.profilePage}
              dispatch={props.dispatch}
            />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;