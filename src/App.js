import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>

        <Header />
        <Nav />

        <div className='app-wrapper-content'>

          <Route path='/dialogs'>
            <DialogsContainer />
          </Route>

          <Route path='/profile'>
            <Profile />
          </Route>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;