import { InferActionsType } from "./redux-store"

type CommentsType = {
    id: number
    name: string
    comment: string
}

let initialState = {
    comments: [
        {id: 1, name: 'Dima', comment: 'Hello it first comment'},
        {id: 2, name: 'Alina', comment: 'Hello all'},
        {id: 3, name: 'Andrey', comment: 'Its work'},
        {id: 4, name: 'Liza', comment: 'Bye'}
    ] as Array<CommentsType>
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

const commentReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type){
        case 'ADD-COMMENT':
            let newComment = {
                id: 5,
                name: "test",
                comment: action.commentText,
                // date: new Date().toLocaleString()
            }
            return{
                ...state,
                comments: [...state.comments, newComment],
            }
        default:
            return state
    }
}

export const actions = {
    addCommentActionCreator: (commentText: string) => ({type: 'ADD-COMMENT', commentText} as const)
}

export default commentReducer