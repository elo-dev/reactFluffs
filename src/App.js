import React from 'react'
import './FontAwesomeIcons'
import './App.scss'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import ProfileContent from './Components/ProfileContent/ProfileContent'
import Stories from './Components/Stories/Stories'
import UploadContainer from './Components/Upload/UploadContainer'
import Explore from './Components/Explore/Explore'
import Home from './Components/Home/Home'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Navbar />
      <Route path='/profile' render={() => <ProfileContent />} />
      <Route path='/stories' render={() => <Stories />} />
      <Route path='/upload'  render={() => <UploadContainer />} />
      <Route path='/explore' render={() => <Explore />} />
      <Route path='/home'    render={() => <Home />} />
    </div>
    </BrowserRouter>
  );
}

export default App;
