import { Action, applyMiddleware, combineReducers, createStore } from 'redux'
import commentReducer from './commentReducer'
import sideBarReducer from './sideBarReducer'
import uploadReducer from './uploadReducer'
import profileItemsReducer from './profileItemsReducer'
import authReducer from './authReducer'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import appReducer from './appReducer'

let rootReducers = combineReducers({
    profileSideBar: sideBarReducer,
    modalComments: commentReducer,
    upload: uploadReducer,
    profileItems: profileItemsReducer,
    auth: authReducer,
    app: appReducer
})

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never 

export type InferActionsType<T extends {[key: string]: (...args: any[])=>any}> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

export default store