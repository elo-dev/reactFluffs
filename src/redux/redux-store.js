import { applyMiddleware, combineReducers, createStore } from 'redux'
import commentReducer from './commentReducer'
import sideBarReducer from './sideBarReducer'
import uploadReducer from './uploadReducer'
import profileItemsReducer from './profileItemsReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profileSideBar: sideBarReducer,
    modalComments: commentReducer,
    upload: uploadReducer,
    profileItems: profileItemsReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store