import { InferActionsType } from "./redux-store"
import { updateObjInArray } from '../Components/common/objHelper/objHelper'

let initialState = {
    post: [
        {id: 1,
         countLike: '520',
         bookmark: false,
         preview: 'https://images.pexels.com/photos/6805701/pexels-photo-6805701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {id: 2,
         countLike: '50',
         bookmark: false,
         preview: 'https://images.pexels.com/photos/6805701/pexels-photo-6805701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {id: 3,
         countLike: '14',
         bookmark: false,
         preview: 'https://images.pexels.com/photos/6805701/pexels-photo-6805701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {id: 4,
         countLike: '1900',
         bookmark: false,
         preview: 'https://images.pexels.com/photos/6805701/pexels-photo-6805701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {id: 5,
         countLike: '10',
         bookmark: false,
         preview: 'https://images.pexels.com/photos/6805701/pexels-photo-6805701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    ]
}

export type UploadInitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

const uploadReducer = (state = initialState, action: ActionsType): UploadInitialStateType => {
    switch(action.type){
        case 'CHANGE-LIKE':
            return{
                ...state,
                post: updateObjInArray(state.post, 'id', action.userId, {followed: true})
            }
        case 'CHANGE-UNLIKE':
            return{
                ...state,
                post: updateObjInArray(state.post, 'id', action.userId, {followed: false})
            }
        case 'BOOKMARK':
            return{
                ...state,
                post: updateObjInArray(state.post, 'id', action.userId, {bookmark: true})
            }
        case 'UNBOOKMARK':
            return{
                ...state,
                post: updateObjInArray(state.post, 'id', action.userId, {bookmark: false})
            }
        case 'ADD-POST':
            let newPost = {
                id: 6,
                countLike: '50',
                postText: action.uploadText,
                bookmark: false,
                preview: 'https://images.pexels.com/photos/6805701/pexels-photo-6805701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
            return{
                ...state,
                post: [...state.post, newPost]
            }
        default: 
            return state
    }
}

export const actions = {
    onLikeChangeActionCreator: (userId: number) => ({type: 'CHANGE-LIKE', userId} as const),
    
    onUnLikeChangeActionCreator: (userId: number) => ({type: 'CHANGE-UNLIKE', userId} as const),
    
    onChangeBookmarkActionCreator: (userId: number) => ({type: 'BOOKMARK', userId} as const),
    
    onChangeUnBookmarkActionCreator: (userId: number) => ({type: 'UNBOOKMARK', userId} as const),
    
    addPost: (uploadText: string) => ({type: 'ADD-POST', uploadText} as const)
}

export default uploadReducer