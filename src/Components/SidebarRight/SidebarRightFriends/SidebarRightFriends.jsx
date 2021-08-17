import React from 'react'
import Friends from './Friends'
import Paginator from '../../common/Paginator/Paginator'

let SideBarRightFriends = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for(let i = 1; i <= pageCount; i++){
        pages.push(i)
    }

    return(
        <div>
            <Paginator  totalUsersCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}                
                        />
            {props.posts.map(f => <Friends  f={f}
                                            isFollowing={props.isFollowing}
                                            follow={props.follow}
                                            unfollow={props.unfollow}
                                            />)}
        </div>
    )
}

export default SideBarRightFriends