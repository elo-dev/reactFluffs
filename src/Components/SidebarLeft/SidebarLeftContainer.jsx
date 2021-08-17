import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SidebarLeft from './SidebarLeft'
import { getUsersProfile, getStatus, updateStatus } from '../../redux/profileItemsReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class SidebarLeftContainer extends React.Component{

    componentDidMount(){
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

    render(){
        return(
            <SidebarLeft {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileItems.profile,
    authorizedUserId: state.auth.userId,
    status: state.profileItems.status
})

export default compose(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(SidebarLeftContainer)