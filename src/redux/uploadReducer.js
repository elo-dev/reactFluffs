const CHANGE_LIKE = 'CHANGE-LIKE'
const CHANGE_UNLIKE = 'CHANGE-UNLIKE'
const BOOKMARK = 'BOOKMARK'
const UNBOOKMARK = 'UNBOOKMARK'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

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
    ],
    newPostText: ''
}

const uploadReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_LIKE:
            return{
                ...state,
                post: state.post.map(p => {
                    if(p.id === action.userId){
                        return{...p, liked: true}
                    }
                    return p
                })
            }
        case CHANGE_UNLIKE:
            return{
                ...state,
                post: state.post.map(p => {
                    if(p.id === action.userId){
                        return{...p, liked: false}
                    }
                    return p
                })
            }
        case BOOKMARK:
            return{
                ...state,
                post: state.post.map(p => {
                    if(p.id === action.userId){
                        return{...p, bookmark: true}
                    }
                    return p
                })
            }
        case UNBOOKMARK:
            return{
                ...state,
                post: state.post.map(p => {
                    if(p.id === action.userId){
                        return{...p, bookmark: false}
                    }
                    return p
                })
            }
        case ADD_POST:
            let newPost = {
                id: 6,
                countLike: '50',
                postText: state.newPostText,
                preview: 'https://images.pexels.com/photos/6805701/pexels-photo-6805701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
            return{
                ...state,
                newPostText: '',
                post: [...state.post, newPost]
            }
        case CHANGE_NEW_POST_TEXT:
            return{
                ...state,
                newPostText: action.newTextPost
            }
        default: 
            return state
    }
}

export const onLikeChangeActionCreator = (userId) => {
    return{
        type: CHANGE_LIKE,
        userId
    }
}

export const onUnLikeChangeActionCreator = (userId) => {
    return{
        type: CHANGE_UNLIKE,
        userId
    }
}

export const onChangeBookmarkActionCreator = (userId) => {
    return{
        type: BOOKMARK,
        userId
    }
}

export const onChangeUnBookmarkActionCreator = (userId) => {
    return{
        type: UNBOOKMARK,
        userId
    }
}

export const addPost = () => {
    return{
        type: ADD_POST
    }
}

export const onChangeTextPost = (text) => {
    return{
        type: CHANGE_NEW_POST_TEXT,
        newTextPost: text
    }
}

export default uploadReducer