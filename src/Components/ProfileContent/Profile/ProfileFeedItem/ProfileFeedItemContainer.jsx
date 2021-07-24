import { connect } from 'react-redux'
import { setCurrentPageActionCreator, setUsersActionCreator, setTotalUsersCountActionCreator, likeActionCreator, unLikeActionCreator, bookmarkActionCreator, unBookmarkActionCreator } from '../../../../redux/profileItemsReducer'
import ProfileFeedItem from './ProfileFeedItem'

let mapStateToProps = (state) => {
    return {
        posts: state.profileItems.posts,
        pageSize: state.profileItems.pageSize,
        totalUsersCount: state.profileItems.totalUsersCount,
        currentPage: state.profileItems.currentPage
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFeedItem)