import React from 'react'
import style from './Profile.module.scss'
import ProfileFeedItem from './ProfileFeedItem/ProfileFeedItem'

const ProfileContent = () => {
    return(
        <section className={style.profileContent}>
            <div className={style.profileFeed}>
                <ProfileFeedItem/>
                <ProfileFeedItem/>
                <ProfileFeedItem/>
                <ProfileFeedItem/>
            </div>
        </section>
    )
}

export default ProfileContent