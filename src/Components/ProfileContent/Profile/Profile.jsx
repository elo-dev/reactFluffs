import React, { useState } from 'react'
import style from './Profile.module.scss'
import ProfileFeedItem from './ProfileFeedItem/ProfileFeedItem'
import Modal from '../../Modal/Modal'
import ProfileModalContentContainer from '../ProfileModalContent/ProfileModalContentContainer'

const ProfileContent = (props) => {
    const [modalActive, setModalActive] = useState(false)
    return(
        <section className={style.profileContent}>
            <div className={style.profileFeed}>
                <ProfileFeedItem onClick={() => setModalActive(true)} />
                <ProfileFeedItem/>
                <ProfileFeedItem/>
                <ProfileFeedItem/>
                <Modal active={modalActive} setActive={setModalActive}>
                    <ProfileModalContentContainer />
                </Modal>
            </div>
        </section>
    )
}

export default ProfileContent