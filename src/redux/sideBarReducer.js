import { updateObjInArray } from "../Components/common/objHelper/objHelper"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    posts: []
}

const sideBarReducer = (state = initialState, action) => {
    
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

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export default sideBarReducer