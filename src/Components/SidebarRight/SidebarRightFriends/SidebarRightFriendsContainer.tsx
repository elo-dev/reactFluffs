import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, getUsers } from '../../../redux/profileItemsReducer'
import SideBarRightFriends from './SidebarRightFriends'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { UserType } from '../../../types/types'
import { AppStateType } from '../../../redux/redux-store'

type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    posts: Array<UserType>,
    totalUsersCount: number,
    isFollowing: Array<number>,
}

type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void,
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class SideBarRightFriendsContainer extends React.Component<PropsType>{

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render(){
        return(
            <>
            <SideBarRightFriends posts={this.props.posts}
                                 pageSize={this.props.pageSize}
                                 totalUsersCount={this.props.totalUsersCount}
                                 currentPage={this.props.currentPage}
                                 follow={this.props.follow}
                                 unfollow={this.props.unfollow}
                                 onPageChanged={this.onPageChanged}
                                 isFollowing={this.props.isFollowing}
                                 />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return{
        posts: state.profileItems.posts,
        pageSize: state.profileItems.pageSize,
        totalUsersCount: state.profileItems.totalUsersCount,
        currentPage: state.profileItems.currentPage,
        isFollowing: state.profileItems.isFollowing
    }
}

let withRedirect = withAuthRedirect(SideBarRightFriendsContainer)

export default connect(mapStateToProps,
    {follow, unfollow, getUsers})(withRedirect)