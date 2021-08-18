import React, { Suspense, lazy } from 'react'
import './FontAwesomeIcons'
import './App.scss'
import HeaderContainer from './Components/Header/HeaderContainer'
import Navbar from './Components/Navbar/Navbar'
import UploadContainer from './Components/Upload/UploadContainer'
import Explore from './Components/Explore/Explore'
import Home from './Components/Home/Home'
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { initializeApp } from './redux/appReducer'
import Preloader from './Components/common/Preloader/Preloader'

const ProfilePage = lazy(() => import('./Components/ProfileContent/ProfileContent'))
const Stories = lazy(() => import('./Components/Stories/Stories'))
const LoginPage = lazy(() => import('./Components/Login/Login'))

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
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/profile/:userId?' render={() => <ProfilePage />} />
            <Route path='/stories' render={() => <Stories />} />
            <Route path='/upload'  render={() => <UploadContainer />} />
            <Route path='/explore' render={() => <Explore />} />
            <Route path='/home'    render={() => <Home />} />
            <Route path='/login'   render={() => <LoginPage/>} />
          </Switch>
        </Suspense>
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
