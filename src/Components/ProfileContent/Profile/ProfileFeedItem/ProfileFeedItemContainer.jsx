import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setCurrentPage, setUsers, setTotalUsersCount, like, unLike, bookmark, unBookmark, toggleIsFetching } from '../../../../redux/profileItemsReducer'
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
    {like, unLike, bookmark, unBookmark, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(ProfileFeedItemContainer)