import { Dispatch } from "redux"
import { profileAPI } from "../api/profileApi"
import { usersAPI } from "../api/usersApi"
import { updateObjInArray } from "../Components/common/objHelper/objHelper"
import { PhotosType, ProfileType, UserType } from "../types/types"
import { BaseThunkType, InferActionsType } from "./redux-store"

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
type ActionsTypes = InferActionsType<typeof actions>

const UsersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch(action.type){
      case 'LIKE':
        return {
          ...state, 
          posts: updateObjInArray(state.posts, 'id', action.userId, {liked: true})
        }
      case 'UNLIKE':
        return {
          ...state, 
          posts: updateObjInArray(state.posts, 'id', action.userId, {liked: false})
        }
      case 'BOOKMARK':
        return {
          ...state, 
          posts: updateObjInArray(state.posts, 'id', action.userId, {bookmark: true})
        }
      case 'UNBOOKMARK':
        return {
          ...state, 
          posts: updateObjInArray(state.posts, 'id', action.userId, {bookmark: false})
        }
      case 'FOLLOW':
          return{
              ...state,
              posts: updateObjInArray(state.posts, 'id', action.userId, {followed: true})
          }
      case 'UNFOLLOW':
          return{
              ...state,
              posts: updateObjInArray(state.posts, 'id', action.userId, {followed: false})
          }
      case 'TOGGLE_IS_FOLLOWING':
        return{
          ...state,
          isFollowing: action.isFollowing
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter(id => id != action.userId)
        }
      case 'SET_USERS_PROFILE':
        return{...state, profile: action.profile}
      case 'SET_USERS': 
        return {...state, posts: action.posts}
      case 'SET_CURRENT_PAGE': 
        return {...state, currentPage: action.currentPage}
      case 'SET_TOTAL_USERS_COUNT': 
        return {...state, totalUsersCount: action.totalUsers}
      case 'TOGGLE_IS_FETCHING':
        return {...state, isFetching: action.isFetching}
      case 'SET_STATUS':
        return {...state, status: action.status}
      case 'SAVE_PHOTO_SUCCESS':
        return {...state, profile: {...state.profile, photos: action.photo} as ProfileType}
      // case SET_ERROR:
      //   return {...state, errors: [...state.errors, action.error]}
      default: 
        return state
    }
}

export const actions = {
  like: (userId: number) => ({type: 'LIKE',userId} as const),
    
  unLike: (userId: number) => ({type: 'UNLIKE',userId} as const),
  
  bookmark: (userId: number) => ({type: 'BOOKMARK',userId} as const),
    
  unBookmark: (userId: number) => ({type: 'UNBOOKMARK',userId} as const),
  
  followSuccess: (userId: number) => ({type: 'FOLLOW',userId} as const),
  
  unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW',userId} as const),
  
  setUsers: (posts: Array<UserType>) => ({type: 'SET_USERS',posts} as const),
  
  setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE',currentPage} as const),
  
  setTotalUsersCount: (totalUsers: number) => ({type: 'SET_TOTAL_USERS_COUNT',totalUsers} as const),
  
  toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING',isFetching} as const),
  
  setUserProfile: (profile: ProfileType) => ({type: 'SET_USERS_PROFILE',profile} as const),
  
  toggleIsFollowing: (isFollowing: boolean, userId: number) => ({type: 'TOGGLE_IS_FOLLOWING',isFollowing,userId} as const),
  
  setStatus: (status: string) => ({type: 'SET_STATUS',status} as const),
  
  savePhotoSuccess: (photo: PhotosType) => ({type: 'SAVE_PHOTO_SUCCESS',photo} as const)
}

type DispatchType = Dispatch<ActionsTypes>
type ThunkType = BaseThunkType<ActionsTypes>

export const getUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch, getState) =>{
  dispatch(actions.toggleIsFetching(true))
  dispatch(actions.setCurrentPage(currentPage))
  let data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(actions.toggleIsFetching(false))
  dispatch(actions.setUsers(data.items))
  dispatch(actions.setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (userId: number, apiMethod: any, dispatch: DispatchType, actionCreator: (userId: number) => ActionsTypes) => {
  dispatch(actions.toggleIsFollowing(true, userId))
  let data = await apiMethod(userId)
  if(data.resultCode === 0){
      dispatch(actionCreator(userId))
  }
  dispatch(actions.toggleIsFollowing(false, userId))
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
  followUnfollowFlow(userId, usersAPI.follow.bind(usersAPI), dispatch, actions.followSuccess)
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  followUnfollowFlow(userId, usersAPI.unfollow.bind(usersAPI), dispatch, actions.unfollowSuccess)
}

export const getUsersProfile = (userId: number): ThunkType => async (dispatch) => {
  let data = await usersAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  let response = await profileAPI.updataStatus(status)
    if(response.data.resultCode === 0){
      dispatch(actions.setStatus(status))
    }
}

export const savePhoto = (photo: File): ThunkType => async (dispatch) => {
  let response = await profileAPI.savePhoto(photo)
    if(response.data.resultCode === 0){
      dispatch(actions.savePhotoSuccess(response.data.data.photos))
    }
}

// type SetError = {
//   type: typeof SET_ERROR
//   error: Array<string>
// }

// export const setError = (error: Array<string>): SetError => {
//   return{
//     type: SET_ERROR,
//     error
//   }
// }

export const updateProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId
  let response = await profileAPI.updateProfile(profile)
    if(response.data.resultCode === 0){
      if(userId != null){
        dispatch(getUsersProfile(userId))
      }else{
        throw new Error('userId can`t be null')
      }
    }
    // else{
    //   let msgError: Array<string> = []
    //   if(response.data.messages.length > 0){
    //     response.data.messages.map(error => {
    //       msgError.push(error)
    //     })
    //   }
    //   dispatch(setError(msgError))
    // }
}

export default UsersReducer