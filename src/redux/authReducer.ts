import { ResultCodeEnum, ResultCodeForCaptchaEnum } from "../api/api"
import { authAPI } from "../api/authApi"
import { BaseThunkType, InferActionsType } from "./redux-store"

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    errors: null as string | null,
    captcha: null as string | null,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type){
        case 'SET_USER_DATA':
            return{
                ...state,
                ...action.data
            }
        case 'SET_ERROR':
            return{
                ...state,
                errors: action.error
            }
        case 'SET_CAPTCHA':
            return{...state, captcha: action.captcha}
        default:
            return state
    }
}

const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
        return{
            type: 'SET_USER_DATA',
            data: {userId, email, login, isAuth}
        } as const
    },
    
    setError: (error: string) => ({type: 'SET_ERROR', error} as const),

    setCaptcha: (captcha: string) => ({type: 'SET_CAPTCHA', captcha} as const)
}

export const getAuthUser = (): ThunkType => (dispatch) => {
    return authAPI.me().then(data => {
    if(data.resultCode === ResultCodeEnum.Success){
        let {id, email, login} = data.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
    })
}

export const loginUser = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
        if(data.resultCode === ResultCodeEnum.Success){
            dispatch(getAuthUser())
        } else {
            if(data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired){
                dispatch(getCaptcha())
            }
            let errorMsg = data.messages.length > 0 ? data.messages[0] : 'Some error'
            dispatch(actions.setError(errorMsg))
        }
}

export const getCaptcha = (): ThunkType => async (dispatch) => {
    let data = await authAPI.captcha()
    dispatch(actions.setCaptcha(data.url))
}

export const logoutUser = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()
        if(data.resultCode === 0){
            dispatch(actions.setAuthUserData(null, null, null, false))
        }
}

export default authReducer