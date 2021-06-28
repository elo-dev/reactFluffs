import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './SidebarRightFriends.module.scss'

const SideBarRightFriends = (props) => {
    return(
        <div className={style.friends}>
            <img src={props.photo} alt="" />
            <div className={style.friendsNameWrapper}>
                <p className={style.friendsName}>{props.name}</p>
                <span className={style.friendsProfileLink}>@{props.link}</span>
            </div>
            <FontAwesomeIcon icon='plus' />
        </div>
    )
}

export default SideBarRightFriends