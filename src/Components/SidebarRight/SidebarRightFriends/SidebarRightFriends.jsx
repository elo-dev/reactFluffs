import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './SidebarRightFriends.module.scss'
import userPhoto from '../../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
import { NavLink } from 'react-router-dom'

let SideBarRightFriends = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for(let i = 1; i <= pageCount; i++){
        pages.push(i)
    }

    return(
        <div>
            <div className={style.pageCount}>
            {pages.map(p => {
                return <span className={`${style.notSelectedPage} ${props.currentPage === p && style.selectedPage}`} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
            })}
            </div>
            {props.posts.map(f => <div className={style.friends} key={f.id}>
                <NavLink to={'/profile/' + f.id}>
                <img src={f.photos.small != null ? f.photos.small : userPhoto} alt="" />
                </NavLink>
                <div className={style.friendsNameWrapper}>
                    <p className={style.friendsName}>{f.name}</p>
                    <span className={style.friendsProfileLink}>@link</span>
                </div>
                {f.followed
                ? <FontAwesomeIcon icon='minus' className={style.deleteFriend} onClick={() => props.unfollow(f.id)} />
                : <FontAwesomeIcon icon='plus' className={style.addFriend} onClick={() => props.follow(f.id)} />
                }
            </div>)}
        </div>
    )
}

export default SideBarRightFriends