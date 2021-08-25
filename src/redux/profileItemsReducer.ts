import { profileAPI, usersAPI } from "../api/api"
import { updateObjInArray } from "../Components/common/objHelper/objHelper"
import { PhotosType, ProfileType, UserType } from "../types/types"

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
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SET_ERROR = 'SET_ERROR'

let initialState = {
  posts: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  countLike: 520,
  isFetching: true,
  profile: null as ProfileType | null,
  isFollowing: [] as Array<number>,
  status: '',
  // errors: []
}

type InitialStateType = typeof initialState

const UsersReducer = (state = initialState, action: any): InitialStateType => {

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
        return {...state, totalUsersCount: action.totalUsers}
      case TOGGLE_IS_FETCHING:
        return {...state, isFetching: action.isFetching}
      case SET_STATUS:
        return {...state, status: action.status}
      case SAVE_PHOTO_SUCCESS:
        return {...state, profile: {...state.profile, photos: action.photo} as ProfileType}
      // case SET_ERROR:
        // return {...state, errors: [...state.errors, action.error]}
      default: 
        return state
    }
}

type LikeActionType = {
  type: typeof LIKE
  userId: number
}

export const like = (userId: number): LikeActionType => {
  return {
    type: LIKE,
    userId
  }
}

type UnlikeActionType = {
  type: typeof UNLIKE
  userId: number
}
  
export const unLike = (userId: number): UnlikeActionType => {
  return {
    type: UNLIKE,
    userId
  }
}

type BookmarkActionType = {
  type: typeof BOOKMARK
  userId: number
}

export const bookmark = (userId: number): BookmarkActionType => {
  return {
    type: BOOKMARK,
    userId
  }
}

type UnbookmarkActionType = {
  type: typeof UNBOOKMARK
  userId: number
}
  
export const unBookmark = (userId: number): UnbookmarkActionType => {
  return {
    type: UNBOOKMARK,
    userId
  }
}

type FollowSuccessActionType = {
  type: typeof FOLLOW
  userId: number
}

export const followSuccess = (userId: number): FollowSuccessActionType => {
  return {
      type: FOLLOW,
      userId
  }
}

type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId: number
}

export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => {
  return {
      type: UNFOLLOW,
      userId
  }
}

type SetUsersActionType = {
  type: typeof SET_USERS
  posts: Array<UserType>
}

export const setUsers = (posts: Array<UserType>): SetUsersActionType => {
  return {
    type: SET_USERS,
    posts
  }
}

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsers: number
}

export const setTotalUsersCount = (totalUsers: number): SetTotalUsersCountActionType => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsers
  }
}

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

export type SetUserProfileActionType = {
  type: typeof SET_USERS_PROFILE
  profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
  return{
    type: SET_USERS_PROFILE,
    profile
  }
}

type toggleIsFollowingActionType = {
  type: typeof TOGGLE_IS_FOLLOWING
  isFollowing: boolean
  userId: number
}

export const toggleIsFollowing = (isFollowing: boolean, userId: number): toggleIsFollowingActionType => {
  return{
    type: TOGGLE_IS_FOLLOWING,
    isFollowing,
    userId
  }
}

type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}

export const setStatus = (status: string): SetStatusActionType => {
  return{
    type: SET_STATUS,
    status
  }
}

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photo: PhotosType
}

export const savePhotoSuccess = (photo: PhotosType): SavePhotoSuccessActionType => {
  return{
    type: SAVE_PHOTO_SUCCESS,
    photo
  }
}

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: any) =>{
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(currentPage))
  let data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (userId: number, apiMethod: any, dispatch: any, actionCreator: any) => {
  dispatch(toggleIsFollowing(true, userId))
  let data = await apiMethod(userId)
  if(data.resultCode === 0){
      dispatch(actionCreator(userId))
  }
  dispatch(toggleIsFollowing(false, userId))
}

export const follow = (userId: number) => async (dispatch: any) => {
  followUnfollowFlow(userId, usersAPI.follow.bind(usersAPI), dispatch, followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: any) => {
  followUnfollowFlow(userId, usersAPI.unfollow.bind(usersAPI), dispatch, unfollowSuccess)
}

export const getUsersProfile = (userId: number) => async (dispatch: any) => {
  let data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
  let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updataStatus(status)
    if(response.data.resultCode === 0){
      dispatch(setStatus(status))
    }
}

export const savePhoto = (photo: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(photo)
    if(response.data.resultCode === 0){
      dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

type SetError = {
  type: typeof SET_ERROR
  error: string
}

export const setError = (error: string): SetError => {
  return{
    type: SET_ERROR,
    error
  }
}

export const updateProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId
  let response = await profileAPI.updateProfile(profile)
    if(response.data.resultCode === 0){
      dispatch(getUsersProfile(userId))
    }
    // else{
    //   let msgError = []
    //   if(response.data.messages.length > 0){
    //     response.data.messages.map(error => {
    //       msgError.push(error)
    //     })
    //   }
    //   dispatch(setError(msgError))
    // }
}

export default UsersReducer