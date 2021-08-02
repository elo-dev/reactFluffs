import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, unfollow, toggleIsFollowing, getUsers } from '../../../redux/profileItemsReducer'
import SideBarRightFriends from './SidebarRightFriends'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'

class SideBarRightFriendsContainer extends React.Component{

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
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

let mapStateToProps = (state) => {
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
    {follow, unfollow, setCurrentPage, toggleIsFollowing, getUsers})(withRedirect)