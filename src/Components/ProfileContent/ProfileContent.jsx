import React from 'react'
import SidebarLeft from '../SidebarLeft/SidebarLeft'
import SidebarRightContainer from '../SidebarRight/SidebarRightContainer'
import Profile from './Profile/Profile'
import style from './ProfileContent.module.scss'

const ProfileContent = (props) => {
    return(
        <div className={style.profileWrapper}>
            <SidebarLeft />
            <section className={style.mainContent}>
                <Profile />
            </section>
            <SidebarRightContainer />
        </div>
    )
}

export default ProfileContent