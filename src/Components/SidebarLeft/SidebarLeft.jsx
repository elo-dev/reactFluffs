import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import style from './SidebarLeft.module.scss'
import Preloader from '../common/Preloader/Preloader'
import userPhoto from '../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
import ProfileStatus from './ProfileStatus'

const SidebarLeft = (props) => {
    if(!props.profile){
        return <Preloader />
    }

    let socials = []

    Object.values(props.profile.contacts).map(s => s !== null ? socials.push(s) : null)

    return(
        <section className={style.sideBarLeft}>
            <div className={style.userInfo}>
                <div className={style.userInfoAbout}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="" />
                    <div className={style.userInfoDetail}>
                        <span className={style.userInfoName}>{props.profile.fullName}</span>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
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
                {socials.map(s =>
                <a href={'https://' + s}>{s}</a>
                )}
            </div>
        </section>
    )
}

export default SidebarLeft