import React, { Profiler } from 'react'
import './FontAwesomeIcons'
import './App.scss';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import ProfileContent from './Components/ProfileContent/ProfileContent';
import SidebarLeft from './Components/SidebarLeft/SidebarLeft'
import SidebarRight from './Components/SidebarRight/SidebarRight'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="mainContentWrapper">
        <SidebarLeft />
        <main className="mainContent">
          <ProfileContent />
        </main>
        <SidebarRight />
      </div>
    </div>
  );
}

export default App;
