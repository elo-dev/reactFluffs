import React from 'react'
import SidebarLeft from '../SidebarLeft/SidebarLeft'
import SidebarRight from '../SidebarRight/SidebarRight'
import Profile from './Profile/Profile'
import style from './ProfileContent.module.scss'

const ProfileContent = () => {
    return(
        <div className={style.profileWrapper}>
            <SidebarLeft />
            <section className={style.mainContent}>
                <Profile />
            </section>
            <SidebarRight />
        </div>
    )
}

export default ProfileContent