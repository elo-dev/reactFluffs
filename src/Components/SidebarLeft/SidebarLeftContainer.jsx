import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import SidebarLeft from './SidebarLeft'
import { getUsersProfile } from '../../redux/profileItemsReducer'

class SidebarLeftContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        this.props.getUsersProfile(userId)
    }

    render(){
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return(
            <SidebarLeft {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileItems.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(SidebarLeftContainer)

export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent)