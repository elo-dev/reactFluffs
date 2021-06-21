import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import style from './Header.module.scss'

const Header = () => {
    return(
        <header className={style.appHeader}>
            <div className={style.titleHeader}>
                <FontAwesomeIcon icon={['fab', 'instagram']} size='3x' />
                <p>Fluffs</p>
            </div>
            <div className={style.notificationsHeader}>
                <input className={style.searchHeader} type="text" placeholder='Search here' />
                <FontAwesomeIcon icon='bell' size='lg' />
                <FontAwesomeIcon icon='envelope' size='lg' />
                <span className={style.accountNameHeader}>
                    <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt="" />
                    <p>name secondName</p>
                </span>
            </div>
        </header>
    )
}

export default Header