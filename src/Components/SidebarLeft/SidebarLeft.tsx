import React, { ChangeEvent } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import style from './SidebarLeft.module.scss'
import Preloader from '../common/Preloader/Preloader'
import userPhoto from '../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
import ProfileStatus from './ProfileStatus'
import { NavLink } from 'react-router-dom'
import { ContactsType, ProfileType } from '../../types/types'

type PropsType = {
    profile: ProfileType | null
    savePhoto: (file: File) => void
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
}

const SidebarLeft: React.FC<PropsType> = ({profile, savePhoto, isOwner, status, updateStatus}) => {

    if(!profile){
        return <Preloader />
    }

    const photoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length){
            savePhoto(e.target.files[0])
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
                    <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt="" />
                    {isOwner && <div>
                    <input type={'file'} onChange={photoSelected} />
                    </div>
                    }
                    <div className={style.userInfoDetail}>
                        <span className={style.userInfoName}>{profile.fullName}</span>
                        <ProfileStatus status={status} updateStatus={updateStatus} />
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
                <p>{profile.aboutMe}</p>
                <p>В поисках работы: {profile.lookingForAJob ? 'Да' :'Нет'}</p>
                <p>Профессиональные навыки: {profile.lookingForAJobDescription}</p>
            </div>
            <div className={style.userWebsite}>
                <h3>Website:</h3>
                {Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
                })}
            </div>
        </section>
    )
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contacts: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return(
        <div>
            <p>{contactTitle}: <a href={contactValue}>{contactValue}</a></p>
        </div>
    )
}

export default SidebarLeft