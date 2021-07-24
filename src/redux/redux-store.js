import { combineReducers, createStore } from 'redux'
import commentReducer from './commentReducer'
import sideBarReducer from './sideBarReducer'
import uploadReducer from './uploadReducer'
import profileItemsReducer from './profileItemsReducer'

let reducers = combineReducers({
    profileSideBar: sideBarReducer,
    modalComments: commentReducer,
    upload: uploadReducer,
    profileItems: profileItemsReducer,
})

let store = createStore(reducers)

export default store