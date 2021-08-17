import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_ERROR = 'SET_ERROR'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errors: []
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data
            }
        case SET_ERROR:
            return{
                ...state,
                errors: [...state.errors, action.error]
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return{
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    }
}

export const setError = (error) => {
    return{
        type: SET_ERROR,
        error
    }
}

export const getAuthUser = () => (dispatch) => {
    authAPI.me().then(data => {
    if(data.resultCode === 0){
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
    })
}

export const loginUser = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if(data.resultCode === 0){
            dispatch(getAuthUser())
        } else {
            let errorMsg = data.messages.length > 0 ? data.messages[0] : 'Some error'
            dispatch(setError(errorMsg))
        }
    })
}

export const logoutUser = () => (dispatch) => {
    authAPI.logout().then(data => {
        if(data.resultCode === 0){
            dispatch(getAuthUser(null, null, null, false))
        }
    })
}


export default authReducer