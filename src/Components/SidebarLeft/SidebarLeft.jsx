import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import style from './SidebarLeft.module.scss'
import Preloader from '../common/Preloader/Preloader'
import userPhoto from '../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
import ProfileStatus from './ProfileStatus'
import { NavLink } from 'react-router-dom'

const SidebarLeft = (props) => {

    if(!props.profile){
        return <Preloader />
    }

    const photoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }

    return(
        <section className={style.sideBarLeft}>
            <div className={style.profileSetting}>
                <NavLink to='/settings' className={style.settingLink}>
                    <FontAwesomeIcon className={style.profileSettingIcon} icon={'user-cog'} />
                </NavLink>
            </div>
            <div className={style.userInfo}>
                <div className={style.userInfoAbout}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="" />
                    {props.isOwner && <div>
                    <input type={'file'} onChange={photoSelected} />
                    </div>
                    }
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
                <h3>Обо мне:</h3>
                <p>{props.profile.aboutMe}</p>
                <p>В поисках работы: {props.profile.lookingForAJob ? 'Да' :'Нет'}</p>
                <p>Профессиональные навыки: {props.profile.lookingForAJobDescription}</p>
            </div>
            <div className={style.userWebsite}>
                <h3>Website:</h3>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </section>
    )
}

export const Contacts = ({contactTitle, contactValue}) => {
    return(
        <div>
            <p>{contactTitle}: <a href={contactValue}>{contactValue}</a></p>
        </div>
    )
}

export default SidebarLeft