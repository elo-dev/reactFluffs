import React from 'react'
import { connect } from 'react-redux'
import { FilterType, getUsers } from '../../../../redux/profileItemsReducer'
import ProfileFeedItem from './ProfileFeedItem'
import Preloader from '../../../common/Preloader/Preloader'
import { AppStateType } from '../../../../redux/redux-store'
import { actions } from '../../../../redux/profileItemsReducer'
import { UserType } from '../../../../types/types'

type MapStatePropsType = {
    posts: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    filter: FilterType
} 

type MapDispatchPropsType = {
    onClick: () => void
    like: (id: number) => void
    unLike: (id: number) => void
    bookmark: (id: number) => void
    unBookmark: (id: number) => void
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
}

class ProfileFeedItemContainer extends React.Component<MapStatePropsType & MapDispatchPropsType>{

    componentDidMount(){
        const {currentPage, pageSize, filter} = this.props
        this.props.getUsers(currentPage, pageSize, filter)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.getUsers(pageNumber, pageSize, filter)
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profileItems.posts,
        pageSize: state.profileItems.pageSize,
        totalUsersCount: state.profileItems.totalUsersCount,
        currentPage: state.profileItems.currentPage,
        isFetching: state.profileItems.isFetching,
        filter: state.profileItems.filter
    }
}

// compose(
//     connect(mapStateToProps,
//     {like, unLike, bookmark, unBookmark, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, getUsers})
// )(ProfileFeedItemContainer)

export default connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps,
    {like: actions.like, unLike: actions.unLike,
    bookmark: actions.bookmark, unBookmark: actions.unBookmark,
    setUsers: actions.setUsers, setCurrentPage: actions.setCurrentPage,
    setTotalUsersCount: actions.setTotalUsersCount, toggleIsFetching: actions.toggleIsFetching,
    getUsers})(ProfileFeedItemContainer)