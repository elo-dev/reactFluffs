import { connect } from 'react-redux'
import { followActionCreator, unfollowActionCreator } from '../../../../redux/sideBarReducer'
import SideBarRightFriends from './SideBarRightFriends'

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
        },
    }
}

const SideBarRightContainer = connect(mapStateToProps, mapDispatchToProps)(SideBarRightFriends)

export default SideBarRightContainer