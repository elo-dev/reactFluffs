import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SidebarLeft from './SidebarLeft'
import { getUsersProfile } from '../../redux/profileItemsReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class SidebarLeftContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        this.props.getUsersProfile(userId)
    }

    render(){
        return(
            <SidebarLeft {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileItems.profile
})

export default compose(
    connect(mapStateToProps, {getUsersProfile}),
    withRouter,
    withAuthRedirect
)(SidebarLeftContainer)