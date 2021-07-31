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
                posts: state.posts.map(f => {
                    if(f.id === action.userId){
                        return {...f, followed: true}
                    }
                    return f
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                posts: state.posts.map(f => {
                    if(f.id === action.userId){
                        return {...f, followed: false}
                    }
                    return f
                })
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