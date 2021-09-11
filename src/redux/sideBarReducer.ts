import { updateObjInArray } from "../Components/common/objHelper/objHelper"
import { UserType } from "../types/types"
import { InferActionsType } from "./redux-store"

let initialState = {
    posts: [] as Array<UserType>
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

const sideBarReducer = (state = initialState, action: ActionsType): InitialStateType => {
    
    switch(action.type){
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
        default: 
            return state
    }
}

export const actions = {
    followActionCreator: (userId: number) => ({type: 'FOLLOW',userId} as const),
    
    unfollowActionCreator: (userId: number) => ({type: 'UNFOLLOW', userId} as const)
}

export default sideBarReducer