import { combineReducers, createStore } from 'redux'
import commentReducer from './commentReducer'
import sideBarReducer from './sideBarReducer'

let reducers = combineReducers({
    profileSideBar: sideBarReducer,
    modalComments: commentReducer
})

let store = createStore(reducers)

export default store