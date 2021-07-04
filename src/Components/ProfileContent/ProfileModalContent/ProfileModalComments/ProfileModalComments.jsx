import React from 'react'
import style from './ProfileModalComments.module.scss'

const ProfileModalComments = (props) => {
    return(
        <div className={style.modalBodyMessageMainWrapper}>
            <div className={style.messageByPhoto}>
                <img src="https://images.pexels.com/photos/6151195/pexels-photo-6151195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
            <div className={style.messageBy}>
                <p className={style.messageByName}>name SecondName</p>
                <p className={style.messageByText}>{props.comment}</p>
                <span className={style.messageByData}>{props.data}</span>
            </div>
        </div>
    )
}

export default ProfileModalComments