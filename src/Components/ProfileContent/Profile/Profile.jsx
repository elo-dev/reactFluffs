import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Profile.module.scss'

const ProfileContent = () => {
    return(
        <section className={style.profileContent}>
            <div className={style.profileFeed}>
                <div className={style.profileFeedItem}>
                    <span>
                        <FontAwesomeIcon icon={['fas', 'heart']} />
                        580
                    </span>
                    <FontAwesomeIcon className={style.profileFeedItem_bookmark} icon='bookmark' />
                    <img src="https://images.pexels.com/photos/4646228/pexels-photo-4646228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                </div>
                <div className={style.profileFeedItem}>
                    <span>
                        <FontAwesomeIcon icon={['fas', 'heart']} />
                        580
                    </span>
                    <FontAwesomeIcon className={style.profileFeedItem_bookmark} icon='bookmark' />
                    <img src="https://images.pexels.com/photos/1441151/pexels-photo-1441151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                </div>
                <div className={style.profileFeedItem}>
                    <span>
                        <FontAwesomeIcon icon={['fas', 'heart']} />
                        580
                    </span>
                    <FontAwesomeIcon className={style.profileFeedItem_bookmark} icon='bookmark' />
                    <img src="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                </div>
            </div>
        </section>
    )
}

export default ProfileContent