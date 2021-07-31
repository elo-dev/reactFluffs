import { combineReducers, createStore } from 'redux'
import commentReducer from './commentReducer'
import sideBarReducer from './sideBarReducer'
import uploadReducer from './uploadReducer'
import profileItemsReducer from './profileItemsReducer'
import authReducer from './authReducer'

let reducers = combineReducers({
    profileSideBar: sideBarReducer,
    modalComments: commentReducer,
    upload: uploadReducer,
    profileItems: profileItemsReducer,
    auth: authReducer
})

let store = createStore(reducers)

export default store