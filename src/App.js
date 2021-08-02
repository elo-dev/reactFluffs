import React from 'react'
import './FontAwesomeIcons'
import './App.scss'
import HeaderContainer from './Components/Header/HeaderContainer'
import Navbar from './Components/Navbar/Navbar'
import ProfileContent from './Components/ProfileContent/ProfileContent'
import Stories from './Components/Stories/Stories'
import UploadContainer from './Components/Upload/UploadContainer'
import Explore from './Components/Explore/Explore'
import Home from './Components/Home/Home'
import LoginPage from './Components/Login/Login'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderContainer />
      <Navbar />
      <Route path='/profile/:userId?' render={() => <ProfileContent />} />
      <Route path='/stories' render={() => <Stories />} />
      <Route path='/upload'  render={() => <UploadContainer />} />
      <Route path='/explore' render={() => <Explore />} />
      <Route path='/home'    render={() => <Home />} />
      <Route path='/login'   render={() => <LoginPage />} />
    </div>
    </BrowserRouter>
  );
}

export default App;
