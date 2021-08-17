import { applyMiddleware, combineReducers, createStore } from 'redux'
import commentReducer from './commentReducer'
import sideBarReducer from './sideBarReducer'
import uploadReducer from './uploadReducer'
import profileItemsReducer from './profileItemsReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import appReducer from './appReducer'

let reducers = combineReducers({
    profileSideBar: sideBarReducer,
    modalComments: commentReducer,
    upload: uploadReducer,
    profileItems: profileItemsReducer,
    auth: authReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store