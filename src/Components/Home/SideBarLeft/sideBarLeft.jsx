import React from 'react'
import style from './sideBarLeft.module.scss'

const SideBarLeft = () => {
    return(
        <div className={style.homeItems}>
            <img className={style.homeItemBackground} src="https://images.pexels.com/photos/4083720/pexels-photo-4083720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <div className={style.homeItemFrom}>
                <img src="https://images.pexels.com/photos/3819977/pexels-photo-3819977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <p className={style.homeItemFromName}>name SecondName</p>
                <p className={style.homeItemFromData}>2 hours ago</p>
            </div>
        </div>
    )
}

export default SideBarLeft