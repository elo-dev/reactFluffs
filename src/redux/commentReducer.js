const ADD_COMMENT = 'ADD-COMMENT'

let initialState = {
    comments: [
        {id: 1, name: 'Dima', comment: 'Hello it first comment'},
        {id: 2, name: 'Alina', comment: 'Hello all'},
        {id: 3, name: 'Andrey', comment: 'Its work'},
        {id: 4, name: 'Liza', comment: 'Bye'}
    ],
    newCommentText: '',
}

const commentReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_COMMENT:
            let newComment = {
                id: 5,
                comment: action.commentText,
                data: new Date().toLocaleString()
            }
            return{
                ...state,
                comments: [...state.comments, newComment],
            }
        default:
            return state
    }
}

export const addCommentActionCreator = (commentText) => {
    return{
        type: ADD_COMMENT,
        commentText
    }
}

export default commentReducer