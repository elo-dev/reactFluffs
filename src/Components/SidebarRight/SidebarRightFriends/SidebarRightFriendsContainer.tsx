import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, getUsers, FilterType } from '../../../redux/profileItemsReducer'
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
    filter: FilterType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void,
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class SideBarRightFriendsContainer extends React.Component<PropsType>{

    componentDidMount(){
        const {currentPage, pageSize, filter} = this.props
        this.props.getUsers(currentPage, pageSize, filter)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.getUsers(pageNumber, pageSize, filter)
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props
        this.props.getUsers(1, pageSize, filter)
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
                                 onFilterChanged={this.onFilterChanged}
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
        isFollowing: state.profileItems.isFollowing,
        filter: state.profileItems.filter
    }
}

let withRedirect = withAuthRedirect(SideBarRightFriendsContainer)

export default connect(mapStateToProps,
    {follow, unfollow, getUsers})(withRedirect)