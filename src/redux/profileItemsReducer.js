import { profileAPI, usersAPI } from "../api/api"
import { updateObjInArray } from "../Components/common/objHelper/objHelper"

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
          posts: updateObjInArray(state.posts, 'id', action.userId, {liked: true})
        }
      case UNLIKE:
        return {
          ...state, 
          posts: updateObjInArray(state.posts, 'id', action.userId, {liked: false})
        }
      case BOOKMARK:
        return {
          ...state, 
          posts: updateObjInArray(state.posts, 'id', action.userId, {bookmark: true})
        }
      case UNBOOKMARK:
        return {
          ...state, 
          posts: updateObjInArray(state.posts, 'id', action.userId, {bookmark: false})
        }
      case FOLLOW:
          return{
              ...state,
              posts: updateObjInArray(state.posts, 'id', action.userId, {followed: true})
          }
      case UNFOLLOW:
          return{
              ...state,
              posts: updateObjInArray(state.posts, 'id', action.userId, {followed: false})
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

export const getUsers = (currentPage, pageSize) => async (dispatch) =>{
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(currentPage))
  let data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (userId, apiMethod, dispatch, actionCreator) => {
  dispatch(toggleIsFollowing(true, userId))
  let data = await apiMethod(userId)
  if(data.resultCode === 0){
      dispatch(actionCreator(userId))
  }
  dispatch(toggleIsFollowing(false, userId))
}

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(userId, usersAPI.follow.bind(usersAPI), dispatch, followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(userId, usersAPI.unfollow.bind(usersAPI), dispatch, unfollowSuccess)
}

export const getUsersProfile = (userId) => async (dispatch) => {
  let data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updataStatus(status)
    if(response.data.resultCode === 0){
      dispatch(setStatus(status))
    }
}

export default UsersReducer