import { connect } from 'react-redux'
import { AppStateType } from '../../../../redux/redux-store'
import { actions } from '../../../../redux/sideBarReducer'
import SideBarRightFriends from './SideBarRightFriends'

let mapStateToProps = (state: AppStateType) => {
    return{
        profileSideBarRight: state.profileSideBar
    }
}

const SideBarRightContainer = connect(mapStateToProps, 
    {follow: actions.followActionCreator, unfollow: actions.unfollowActionCreator}
    )(SideBarRightFriends)

export default SideBarRightContainer