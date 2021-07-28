import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setCurrentPageActionCreator, setUsersActionCreator, setTotalUsersCountActionCreator, likeActionCreator, unLikeActionCreator, bookmarkActionCreator, unBookmarkActionCreator, toggleIsFetching } from '../../../../redux/profileItemsReducer'
import ProfileFeedItem from './ProfileFeedItem'
import Preloader from '../../../common/Preloader/Preloader'

class ProfileFeedItemContainer extends React.Component{

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
            {this.props.isFetching ? <Preloader /> : null}
            <ProfileFeedItem posts={this.props.posts}
                             pageSize={this.props.pageSize}
                             totalUsersCount={this.props.totalUsersCount}
                             currentPage={this.props.currentPage}
                             onPageChanged={this.onPageChanged}
                             toggleModal={this.props.onClick} />
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

let mapDispatchToProps = (dispatch) => {
    return {
        like: (userId) => {
            dispatch(likeActionCreator(userId))
        },
        unLike: (userId) => {
            dispatch(unLikeActionCreator(userId))
        },
        bookmark: (userId) => {
            dispatch(bookmarkActionCreator(userId))
        },
        unBookmark: (userId) => {
            dispatch(unBookmarkActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFeedItemContainer)