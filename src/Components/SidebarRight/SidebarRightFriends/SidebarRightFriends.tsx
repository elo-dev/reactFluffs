import React, { useEffect } from 'react'
import Friends from './Friends'
import Paginator from '../../common/Paginator/Paginator'
import { FilterType, getUsers } from '../../../redux/profileItemsReducer'
import UsersSearchForm from './UsersSearchForm'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentPage, getFilter, getIsFollowing, getPageSize, getTotalUsersCount, getUsersSelector } from '../../../redux/usersSelector'

type PropsType = {}

export const SideBarRightFriends: React.FC<PropsType> = (props) => {

    const posts = useSelector(getUsersSelector)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const filter = useSelector(getFilter)
    const isFollowing = useSelector(getIsFollowing)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize, filter))
    },[])

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter))
    }

    const follow = (userId: number) => {
        dispatch(follow(userId))
    }

    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return(
        <div>
            <UsersSearchForm onFilterChanged={onFilterChanged} />
            {posts.map(f => <Friends key={f.id} 
                                     friend={f}
                                     isFollowing={isFollowing}
                                     follow={follow}
                                     unfollow={unfollow}
                                    />)}
            <Paginator  totalUsersCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}
                        />
        </div>
    )
}