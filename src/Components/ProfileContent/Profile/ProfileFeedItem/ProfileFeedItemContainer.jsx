import React from 'react'
import { connect } from 'react-redux'
import { setCurrentPage, setUsers, setTotalUsersCount, like, unLike, bookmark, unBookmark, toggleIsFetching, getUsers } from '../../../../redux/profileItemsReducer'
import ProfileFeedItem from './ProfileFeedItem'
import Preloader from '../../../common/Preloader/Preloader'

class ProfileFeedItemContainer extends React.Component{

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render(){
        return(
            <>
            {this.props.isFetching ? <Preloader /> : null}
            <ProfileFeedItem posts={this.props.posts}
                             pageSize={this.props.pageSize}
                             totalUsersCount={this.props.totalUsersCount}
                             currentPage={this.props.currentPage}
                             onPageChanged={this.onPageChanged}
                             toggleModal={this.props.onClick}
                             like={this.props.like}
                             unLike={this.props.unLike}
                             bookmark={this.props.bookmark}
                             unBookmark={this.props.unBookmark}
                             />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profileItems.posts,
        pageSize: state.profileItems.pageSize,
        totalUsersCount: state.profileItems.totalUsersCount,
        currentPage: state.profileItems.currentPage,
        isFetching: state.profileItems.isFetching
    }
}

export default connect(mapStateToProps, 
    {like, unLike, bookmark, unBookmark, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, getUsers})(ProfileFeedItemContainer)