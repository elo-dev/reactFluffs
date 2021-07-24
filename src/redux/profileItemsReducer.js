const LIKE = 'LIKE'
const UNLIKE = 'UNLIKE'
const SET_USERS = 'SET_USERS'
const BOOKMARK = 'BOOKMARK'
const UNBOOKMARK = 'UNBOOKMARK'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
  posts: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  countLike: 520
}

const UsersReducer = (state = initialState, action) => {

    switch(action.type){
      case LIKE:
        return {
          ...state, 
          posts: state.posts.map(u => {
            if(u.id === action.userId){
              return {...u, liked: true}
            }
            return u
          })
        }
      case UNLIKE:
        return {
          ...state, 
          posts: state.posts.map(u => {
            if(u.id === action.userId){
              return {...u, liked: false}
            }
            return u
          })
        }
        case BOOKMARK:
        return {
          ...state, 
          posts: state.posts.map(u => {
            if(u.id === action.userId){
              return {...u, bookmark: true}
            }
            return u
          })
        }
      case UNBOOKMARK:
        return {
          ...state, 
          posts: state.posts.map(u => {
            if(u.id === action.userId){
              return {...u, bookmark: false}
            }
            return u
          })
        }
      case SET_USERS: 
        return {...state, posts: action.posts}
      case SET_CURRENT_PAGE: 
        return {...state, currentPage: action.currentPage}
      case SET_TOTAL_USERS_COUNT: 
        return {...state, totalUsersCount: action.count}
      default: 
        return state
    }
}

export const likeActionCreator = (userId) => {
  return {
    type: LIKE,
    userId
  }
}
  
export const unLikeActionCreator = (userId) => {
  return {
    type: UNLIKE,
    userId
  }
}

export const bookmarkActionCreator = (userId) => {
  return {
    type: BOOKMARK,
    userId
  }
}
  
export const unBookmarkActionCreator = (userId) => {
  return {
    type: UNBOOKMARK,
    userId
  }
}

export const setUsersActionCreator = (posts) => {
  return {
    type: SET_USERS,
    posts
  }
}

export const setCurrentPageActionCreator = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

export const setTotalUsersCountActionCreator = (totalUsers) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsers
  }
}

export default UsersReducer