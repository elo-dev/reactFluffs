const ADD_COMMENT = 'ADD-COMMENT'

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
    ] as Array<CommentsType>,
    newCommentText: '',
}

export type InitialStateType = typeof initialState

const commentReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type){
        case ADD_COMMENT:
            let newComment = {
                id: 5,
                name: "test",
                comment: action.commentText,
                date: new Date().toLocaleString()
            }
            return{
                ...state,
                comments: [...state.comments, newComment],
            }
        default:
            return state
    }
}

type AddCommentActionCreatorType = {
    type: typeof ADD_COMMENT
    commentText: string
}

export const addCommentActionCreator = (commentText: string): AddCommentActionCreatorType => {
    return{
        type: ADD_COMMENT,
        commentText
    }
}

export default commentReducer