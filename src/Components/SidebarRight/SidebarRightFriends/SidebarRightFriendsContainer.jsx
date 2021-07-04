import React from 'react'
import { followActionCreator, unfollowActionCreator } from '../../../redux/sideBarReducer'
import { connect } from 'react-redux'
import SidebarRightFriends from './SidebarRightFriends'

let mapStateToProps = (state) => {
    return{
        profileSideBarRight: state.profileSideBar
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        }
    }
}

const SideBarRightFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarRightFriends)

export default SideBarRightFriendsContainer