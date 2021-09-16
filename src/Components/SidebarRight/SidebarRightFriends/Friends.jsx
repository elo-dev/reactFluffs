import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
import style from './SidebarRightFriends.module.scss'

const Friends = ({friend, ...props}) => {
    return(
        <div className={style.friends} key={friend.id}>
            <NavLink to={'/profile/' + friend.id}>
            <img src={friend.photos.small != null ? friend.photos.small : userPhoto} alt="" />
            </NavLink>
            <div className={style.friendsNameWrapper}>
                <p className={style.friendsName}>{friend.name}</p>
                <span className={style.friendsProfileLink}>@link</span>
            </div>
            {friend.followed
            ? <button disabled={props.isFollowing.some(id => id === friend.id)} onClick={() => {
                props.unfollow(friend.id)
            }}><FontAwesomeIcon icon='minus' className={style.deleteFriend} /></button>
            : <button disabled={props.isFollowing.some(id => id === friend.id)} onClick={() => {
                props.follow(friend.id)
            }}><FontAwesomeIcon icon='plus' className={style.addFriend} /></button>
        }
        </div>
    )
}

export default Friends