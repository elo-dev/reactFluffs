import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import style from './ExploreSections.module.scss'

const ExploreSections = () => {
    return(
        <div className={style.profileFeed}>
            <div className={style.profileFeedItem}>
                <span>
                    <FontAwesomeIcon icon={['fas', 'heart']} />
                    580
                </span>
                <FontAwesomeIcon className={style.profileFeedItem_bookmark} icon='bookmark' />
                <img src="https://images.pexels.com/photos/4646228/pexels-photo-4646228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                
                <div className={style.exploreSectionsAuthor}>
                    <img src="https://images.pexels.com/photos/6389819/pexels-photo-6389819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ExploreSections