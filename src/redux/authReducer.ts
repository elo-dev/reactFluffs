import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_ERROR = 'SET_ERROR'
const SET_CAPTCHA = 'SET_CAPTCHA'

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    errors: null as string | null,
    captcha: null as string | null,
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data
            }
        case SET_ERROR:
            return{
                ...state,
                errors: action.error
            }
        case SET_CAPTCHA:
            return{...state, captcha: action.captcha}
        default:
            return state
    }
}

type SetAuthUserDataActionDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    data: SetAuthUserDataActionDataType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => {
    return{
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    }
}

type SetErrorActionType = {
    type: typeof SET_ERROR
    error: string
}

export const setError = (error: string): SetErrorActionType => {
    return{
        type: SET_ERROR,
        error
    }
}

export const getAuthUser = () => (dispatch: any) => {
    return authAPI.me().then(data => {
    if(data.resultCode === 0){
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
    })
}

export const loginUser = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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

type SetCaptchaActionType = {
    type: typeof SET_CAPTCHA
    captcha: string
}

export const setCaptcha = (captcha: string): SetCaptchaActionType => {
    return{
        type: SET_CAPTCHA,
        captcha
    }
}

export const getCaptcha = () => async (dispatch: any) => {
    let data = await authAPI.captcha()
    dispatch(setCaptcha(data.url))
}

export const logoutUser = () => async (dispatch: any) => {
    let data = await authAPI.logout()
        if(data.resultCode === 0){
            dispatch(setAuthUserData(null, null, null, false))
        }
}

export default authReducer