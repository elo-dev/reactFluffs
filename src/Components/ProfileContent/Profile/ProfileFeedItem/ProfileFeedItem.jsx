import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './ProfileFeedItem.module.scss'

const ProfileFeedItem = () => {
    return(
        <div className={style.profileFeedItem}>
            <span>
                <FontAwesomeIcon icon={['fas', 'heart']} />
                580
            </span>
            <FontAwesomeIcon className={style.profileFeedItem_bookmark} icon='bookmark' />
            <img src="https://images.pexels.com/photos/4646228/pexels-photo-4646228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        </div>
    )
}

export default ProfileFeedItem