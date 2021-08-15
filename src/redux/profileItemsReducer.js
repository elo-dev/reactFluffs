import { profileAPI, usersAPI } from "../api/api"

const LIKE = 'LIKE'
const UNLIKE = 'UNLIKE'
const SET_USERS = 'SET_USERS'
const BOOKMARK = 'BOOKMARK'
const UNBOOKMARK = 'UNBOOKMARK'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'
const SET_STATUS = 'SET_STATUS'

let initialState = {
  posts: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  countLike: 520,
  isFetching: true,
  profile: null,
  isFollowing: [],
  status: ''
}

const UsersReducer = (state = initialState, action) => {

    switch(action.type){
      case LIKE:
        return {
          ...state, 
          posts: state.posts.map(u => {
            if(u.id === action.userId){
              return {...u, liked: true}
            }
            return u
          })
        }
      case UNLIKE:
        return {
          ...state, 
          posts: state.posts.map(u => {
            if(u.id === action.userId){
              return {...u, liked: false}
            }
            return u
          })
        }
      case BOOKMARK:
        return {
          ...state, 
          posts: state.posts.map(u => {
            if(u.id === action.userId){
              return {...u, bookmark: true}
            }
            return u
          })
        }
      case UNBOOKMARK:
        return {
          ...state, 
          posts: state.posts.map(u => {
            if(u.id === action.userId){
              return {...u, bookmark: false}
            }
            return u
          })
        }
      case FOLLOW:
          return{
              ...state,
              posts: state.posts.map(f => {
                  if(f.id === action.userId){
                      return {...f, followed: true}
                  }
                  return f
              })
          }
      case UNFOLLOW:
          return{
              ...state,
              posts: state.posts.map(f => {
                  if(f.id === action.userId){
                      return {...f, followed: false}
                  }
                  return f
              })
          }
      case TOGGLE_IS_FOLLOWING:
        return{
          ...state,
          isFollowing: action.isFollowing
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter(id => id != action.userId)
        }
      case SET_USERS_PROFILE:
        return{...state, profile: action.profile}
      case SET_USERS: 
        return {...state, posts: action.posts}
      case SET_CURRENT_PAGE: 
        return {...state, currentPage: action.currentPage}
      case SET_TOTAL_USERS_COUNT: 
        return {...state, totalUsersCount: action.count}
      case TOGGLE_IS_FETCHING:
        return {...state, isFetching: action.isFetching}
      case SET_STATUS:
        return {...state, status: action.status}
      default: 
        return state
    }
}

export const like = (userId) => {
  return {
    type: LIKE,
    userId
  }
}
  
export const unLike = (userId) => {
  return {
    type: UNLIKE,
    userId
  }
}

export const bookmark = (userId) => {
  return {
    type: BOOKMARK,
    userId
  }
}
  
export const unBookmark = (userId) => {
  return {
    type: UNBOOKMARK,
    userId
  }
}

export const followSuccess = (userId) => {
  return {
      type: FOLLOW,
      userId
  }
}

export const unfollowSuccess = (userId) => {
  return {
      type: UNFOLLOW,
      userId
  }
}

export const setUsers = (posts) => {
  return {
    type: SET_USERS,
    posts
  }
}

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

export const setTotalUsersCount = (totalUsers) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsers
  }
}

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

export const setUserProfile = (profile) => {
  return{
    type: SET_USERS_PROFILE,
    profile
  }
}

export const toggleIsFollowing = (isFollowing, userId) => {
  return{
    type: TOGGLE_IS_FOLLOWING,
    isFollowing,
    userId
  }
}

export const setStatus = (status) => {
  return{
    type: SET_STATUS,
    status
  }
}

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) =>{
      dispatch(toggleIsFetching(true))
          usersAPI.getUsers(currentPage, pageSize).then(data => {
              dispatch(toggleIsFetching(false))
              dispatch(setUsers(data.items))
              dispatch(setTotalUsersCount(data.totalCount))
          })
      }
}

export const follow = (userId) => {
    return (dispatch) => {
      dispatch(toggleIsFollowing(true, userId))
      usersAPI.follow(userId).then(data => {
      if(data.resultCode === 0){
          dispatch(followSuccess(userId))
          }
      dispatch(toggleIsFollowing(false, userId))
      })
    }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    usersAPI.unfollow(userId).then(data => {
    if(data.resultCode === 0){
        dispatch(unfollowSuccess(userId))
        }
    dispatch(toggleIsFollowing(false, userId))
    })
  }
}

export const getUsersProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data))
    })
  }
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(data => {
    dispatch(setStatus(data))
  })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updataStatus(status).then(response => {
    if(response.data.resultCode === 0){
      dispatch(setStatus(status))
    }
  })
}

export default UsersReducer