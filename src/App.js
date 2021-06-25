import React from 'react'
import './FontAwesomeIcons'
import './App.scss';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import ProfileContent from './Components/ProfileContent/ProfileContent';
import Stories from './Components/Stories/Stories';
import Upload from './Components/Upload/Upload';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Explore from './Components/Explore/Explore';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Navbar />
      <Route path='/profile' render={() => <ProfileContent />} />
      <Route path='/stories' render={() => <Stories />} />
      <Route path='/upload'  render={() => <Upload />} />
      <Route path='/explore'  render={() => <Explore />} />
    </div>
    </BrowserRouter>
  );
}

export default App;
