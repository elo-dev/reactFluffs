import { AppStateType } from "./redux-store"

export const getUsersSelector = (state: AppStateType) => {
    return state.profileItems.posts
}

export const getPageSize = (state: AppStateType) => {
    return state.profileItems.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.profileItems.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.profileItems.currentPage
}

export const getIsFollowing = (state: AppStateType) => {
    return state.profileItems.isFollowing
}

export const getFilter = (state: AppStateType) => {
    return state.profileItems.filter
}