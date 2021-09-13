import React from 'react'
import Friends from './Friends'
import Paginator from '../../common/Paginator/Paginator'
import { UserType } from '../../../types/types'
import { Field, Form, Formik } from 'formik'
import { FilterType } from '../../../redux/profileItemsReducer'
import UsersSearchForm from './UsersSearchForm'

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    onFilterChanged: (filter: FilterType) => void
    posts: Array<UserType>,
    isFollowing: Array<number>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

let SideBarRightFriends: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged, posts, ...props}) => {
    return(
        <div>
            <UsersSearchForm onFilterChanged={props.onFilterChanged} />
            {posts.map(f => <Friends  f={f}
                                        isFollowing={props.isFollowing}
                                        follow={props.follow}
                                        unfollow={props.unfollow}
                                        />)}
            <Paginator  totalUsersCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}
                        />
        </div>
    )
}

export default SideBarRightFriends