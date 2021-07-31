import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SidebarLeft from './SidebarLeft'
import { setUserProfile } from '../../redux/profileItemsReducer'

class SidebarLeftContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
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

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)