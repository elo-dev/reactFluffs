import React, { useEffect } from 'react'
import Friends from './Friends'
import Paginator from '../../common/Paginator/Paginator'
import { FilterType, getUsers } from '../../../redux/profileItemsReducer'
import UsersSearchForm from './UsersSearchForm'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentPage, getFilter, getIsFollowing, getPageSize, getTotalUsersCount, getUsersSelector } from '../../../redux/usersSelector'
import { useHistory } from 'react-router'
import * as queryString from 'querystring'

type PropsType = {}

type QueryParamsType = {
    term?: string
    page?: string
    friend?: string
}

export const SideBarRightFriends: React.FC<PropsType> = (props) => {

    const posts = useSelector(getUsersSelector)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const filter = useSelector(getFilter)
    const isFollowing = useSelector(getIsFollowing)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {

        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter

        if(!!parsed.page) actualPage = Number(parsed.page)
        if(!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch(parsed.friend){
            case 'null':
                actualFilter = {...actualFilter, friend: null}
                break
            case 'true':
                actualFilter = {...actualFilter, friend: true}
                break
            case 'false':
                actualFilter = {...actualFilter, friend: false}
                break
        }
        
        dispatch(getUsers(actualPage, pageSize, actualFilter))
    },[])

    useEffect(() => {
        const query: QueryParamsType = {}

        if(!!filter.term) query.term = filter.term
        if(filter.friend !== null) query.friend = String(filter.friend)
        if(currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/profile',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

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