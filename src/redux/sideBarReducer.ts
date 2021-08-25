import { updateObjInArray } from "../Components/common/objHelper/objHelper"
import { UserType } from "../types/types"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    posts: [] as Array<UserType>
}

type InitialStateType = typeof initialState

const sideBarReducer = (state = initialState, action: any): InitialStateType => {
    
    switch(action.type){
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
        default: 
            return state
    }
}

type FollowActionCreatorActionType = {
    type: typeof FOLLOW
    userId: number
}

export const followActionCreator = (userId: number): FollowActionCreatorActionType => {
    return {
        type: FOLLOW,
        userId
    }
}

type UnfollowActionCreatorActionType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unfollowActionCreator = (userId: number): UnfollowActionCreatorActionType => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export default sideBarReducer