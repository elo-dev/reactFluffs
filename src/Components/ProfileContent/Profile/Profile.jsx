import React, { useState } from 'react'
import style from './Profile.module.scss'
import ProfileFeedItemContainer from './ProfileFeedItem/ProfileFeedItemContainer'
import Modal from '../../Modal/Modal'
import ProfileModalContentContainer from '../ProfileModalContent/ProfileModalContentContainer'

const ProfileContent = (props) => {
    const [modalActive, setModalActive] = useState(false)
    return(
        <section className={style.profileContent}>
            <div className={style.profileFeed}>
                <ProfileFeedItemContainer onClick={() => setModalActive(true)} />
                <Modal active={modalActive} setActive={setModalActive}>
                    <ProfileModalContentContainer />
                </Modal>
            </div>
        </section>
    )
}

export default ProfileContent