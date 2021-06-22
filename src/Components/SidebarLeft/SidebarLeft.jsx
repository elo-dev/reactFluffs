import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import style from './SidebarLeft.module.scss'

const SidebarLeft = () => {
    return(
        <section className={style.sideBarLeft}>
            <div className={style.userInfo}>
                <div className={style.userInfoAbout}>
                    <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="" />
                    <div className={style.userInfoDetail}>
                        <span className={style.userInfoName}>Name secondName</span>
                        <span className={style.userInfoHashtag}>@Hashtag</span>
                        <span className={style.userInfoLinks}>
                            <a href=""><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                            <a href=""><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            <a href=""><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                        </span>
                    </div>
                </div>
            </div>
            <div className={style.userSubscribers}>
                <ul>
                    <li><a href="">Posts <FontAwesomeIcon icon='chevron-right' /></a></li>
                    <li><a href="">Followers <FontAwesomeIcon icon='chevron-right' /></a></li>
                    <li><a href="">Following <FontAwesomeIcon icon='chevron-right' /></a></li>
                </ul>
            </div>
            <div className={style.userBiography}>
                <p>Bio:</p>
                <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
            </div>
            <div className={style.userWebsite}>
                <p>Website:</p>
                <p>http://www.themashabrand.com</p>
            </div>
        </section>
    )
}

export default SidebarLeft