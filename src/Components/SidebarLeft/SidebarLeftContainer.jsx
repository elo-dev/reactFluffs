import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
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
        return(
            <SidebarLeft {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileItems.profile
})

let WithUrlDataContainerComponent = withRouter(SidebarLeftContainer)

export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent)