import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleIsFollowing } from '../../../redux/profileItemsReducer'
import SideBarRightFriends from './SidebarRightFriends'
import { usersAPI } from '../../../api/api'

class SideBarRightFriendsContainer extends React.Component{

    componentDidMount(){
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
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
                                 setUsers={this.props.setUsers}
                                 setCurrentPage={this.props.setCurrentPage}
                                 setTotalUsersCount={this.props.setTotalUsersCount}
                                 toggleIsFetching={this.props.toggleIsFetching}
                                 onPageChanged={this.onPageChanged}
                                 toggleIsFollowing={this.props.toggleIsFollowing}
                                 isFollowing={this.props.isFollowing}
                                 />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        posts: state.profileItems.posts,
        pageSize: state.profileItems.pageSize,
        totalUsersCount: state.profileItems.totalUsersCount,
        currentPage: state.profileItems.currentPage,
        isFollowing: state.profileItems.isFollowing
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowing})(SideBarRightFriendsContainer)