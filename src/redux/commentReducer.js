const ADD_COMMENT = 'ADD-COMMENT'
const CHANGE_NEW_COMMENT_TEXT = 'CHANGE-NEW-COMMENT-TEXT'

let initialState = {
    comments: [
        {id: 1, name: 'Dima', comment: 'Hello it first comment'},
        {id: 2, name: 'Alina', comment: 'Hello all'},
        {id: 3, name: 'Andrey', comment: 'Its work'},
        {id: 4, name: 'Liza', comment: 'Bye'}
    ],
    newCommentText: ''
}

const commentReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_COMMENT:
            let newComment = {
                id: 5,
                data: new Date().toLocaleString(),
                comment: state.newCommentText
            }
            if(state.newCommentText.length > 0){
                return{
                    ...state,
                    newCommentText: '',
                    comments: [...state.comments, newComment]
                }
            }else{
                return{
                    ...state
                }
            }
        case CHANGE_NEW_COMMENT_TEXT:
            return{
                ...state,
                newCommentText: action.newComment
            }
        default:
            return state
    }
}

export const addCommentActionCreator = () => {
    return{
        type: ADD_COMMENT
    }
}

export const onCommentChangeActionCreator = (text) => {
    return{
        type: CHANGE_NEW_COMMENT_TEXT,
        newComment: text
    }
}

export default commentReducer