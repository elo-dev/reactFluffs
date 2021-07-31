import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from '../../../redux/profileItemsReducer'
import SideBarRightFriends from './SidebarRightFriends'

class SideBarRightFriendsContainer extends React.Component{

    componentDidMount(){
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
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
                                 onPageChanged={this.onPageChanged} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        posts: state.profileItems.posts,
        pageSize: state.profileItems.pageSize,
        totalUsersCount: state.profileItems.totalUsersCount,
        currentPage: state.profileItems.currentPage
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(SideBarRightFriendsContainer)