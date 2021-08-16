import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
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
                {props.isAuth
                ? <span className={style.accountNameHeader}>
                    <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt="" />
                    <p>{props.login}</p>
                    <FontAwesomeIcon onClick={props.logoutUser} className={style.headerLogout} icon='sign-out-alt' />
                </span>
                : <NavLink to={'/login'}>Войти</NavLink>
                }
            </div>
        </header>
    )
}

export default Header