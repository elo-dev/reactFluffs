import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SidebarLeft from './SidebarLeft'
import { getUsersProfile, getStatus, updateStatus, savePhoto } from '../../redux/profileItemsReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class SidebarLeftContainer extends React.Component{

    refreshProfile(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUsersProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount(){
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render(){
        return(
            <SidebarLeft {...this.props}
                         profile={this.props.profile}
                         status={this.props.status} 
                         updateStatus={this.props.updateStatus}
                         isOwner={!this.props.match.params.userId}
                         savePhoto={this.props.savePhoto}
                         />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileItems.profile,
    authorizedUserId: state.auth.userId,
    status: state.profileItems.status
})

export default compose(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(SidebarLeftContainer)