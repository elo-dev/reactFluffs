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
import { connect } from 'react-redux'
import { initializeApp } from './redux/appReducer'
import Preloader from './Components/common/Preloader/Preloader'

class App extends React.Component {

  componentDidMount(){
    this.props.initializeApp()
  }

  render(){

    if(!this.props.initialized){
      return <Preloader />
    }

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
    )
  }
}

const mapStateToProps = (state) => {
  return{
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, {initializeApp})(App)
