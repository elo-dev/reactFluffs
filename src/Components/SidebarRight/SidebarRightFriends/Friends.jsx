import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
import style from './SidebarRightFriends.module.scss'

const Friends = ({f, ...props}) => {
    return(
        <div className={style.friends} key={f.id}>
            <NavLink to={'/profile/' + f.id}>
            <img src={f.photos.small != null ? f.photos.small : userPhoto} alt="" />
            </NavLink>
            <div className={style.friendsNameWrapper}>
                <p className={style.friendsName}>{f.name}</p>
                <span className={style.friendsProfileLink}>@link</span>
            </div>
            {f.followed
            ? <button disabled={props.isFollowing.some(id => id === f.id)} onClick={() => {
                props.unfollow(f.id)
            }}><FontAwesomeIcon icon='minus' className={style.deleteFriend} /></button>
            : <button disabled={props.isFollowing.some(id => id === f.id)} onClick={() => {
                props.follow(f.id)
            }}><FontAwesomeIcon icon='plus' className={style.addFriend} /></button>
        }
        </div>
    )
}

export default Friends