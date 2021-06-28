import { combineReducers, createStore } from 'redux'
import sideBarReducer from './sideBarReducer'

let reducers = combineReducers({
    profileSideBar: sideBarReducer
})

let store = createStore(reducers)

export default store