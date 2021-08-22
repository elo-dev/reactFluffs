import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_ERROR = 'SET_ERROR'
const SET_CAPTCHA = 'SET_CAPTCHA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errors: [],
    captcha: null
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
        case SET_CAPTCHA:
            return{...state, captcha: action.captcha}
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
    return authAPI.me().then(data => {
    if(data.resultCode === 0){
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
    })
}

export const loginUser = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
        if(data.resultCode === 0){
            dispatch(getAuthUser())
        } else {
            if(data.resultCode === 10){
                dispatch(getCaptcha())
            }
            let errorMsg = data.messages.length > 0 ? data.messages[0] : 'Some error'
            dispatch(setError(errorMsg))
        }
}

export const setCaptcha = (captcha) => {
    return{
        type: SET_CAPTCHA,
        captcha
    }
}

export const getCaptcha = (captcha) => async (dispatch) => {
    let data = await authAPI.captcha(captcha)
    dispatch(setCaptcha(data.url))
}

export const logoutUser = () => async (dispatch) => {
    let data = await authAPI.logout()
        if(data.resultCode === 0){
            dispatch(getAuthUser(null, null, null, false))
        }
}


export default authReducer