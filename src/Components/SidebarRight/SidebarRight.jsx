import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './SidebarRight.module.scss'

const SidebarRight = () => {
    return(
        <section className={style.sideBarRight}>
            <div className={style.friendsWrapper}>
                <div className={style.friends}>
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <div className={style.friendsNameWrapper}>
                        <p className={style.friendsName}>Name SecondName</p>
                        <span className={style.friendsProfileLink}>@profileLink</span>
                    </div>
                    <FontAwesomeIcon icon='plus' />
                </div>
                <div className={style.friends}>
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <div className={style.friendsNameWrapper}>
                        <p className={style.friendsName}>Name SecondName</p>
                        <span className={style.friendsProfileLink}>@profileLink</span>
                    </div>
                    <FontAwesomeIcon icon='plus' />
                </div>
                <div className={style.friends}>
                    <img src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <div className={style.friendsNameWrapper}>
                        <p className={style.friendsName}>Name SecondName</p>
                        <span className={style.friendsProfileLink}>@profileLink</span>
                    </div>
                    <FontAwesomeIcon icon='plus' />
                </div>
                <div className={style.friends}>
                    <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <div className={style.friendsNameWrapper}>
                        <p className={style.friendsName}>Name SecondName</p>
                        <span className={style.friendsProfileLink}>@profileLink</span>
                    </div>
                    <FontAwesomeIcon icon='plus' />
                </div>
                <div className={style.friends}>
                    <img src="https://images.pexels.com/photos/1082962/pexels-photo-1082962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <div className={style.friendsNameWrapper}>
                        <p className={style.friendsName}>Name SecondName</p>
                        <span className={style.friendsProfileLink}>@profileLink</span>
                    </div>
                    <FontAwesomeIcon icon='plus' />
                </div>
            </div>

            <div className={style.trendingPhoto}>
                <h4>Trending Photo</h4>
                <div className={style.photoWrapper}>
                    <div className={style.photo}>
                        <img src="https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.photo}>
                        <img src="https://images.pexels.com/photos/6858635/pexels-photo-6858635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.photo}>
                        <img src="https://images.pexels.com/photos/347735/pexels-photo-347735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.photo}>
                        <img src="https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.photo}>
                        <img src="https://images.pexels.com/photos/7093148/pexels-photo-7093148.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    </div>
                    <div className={style.photo}>
                        <img src="https://images.pexels.com/photos/431722/pexels-photo-431722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SidebarRight