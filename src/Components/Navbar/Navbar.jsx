import React from 'react'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import style from './Navbar.module.scss'

const Navbar = () => {
    return(
        <nav className={style.appNavbar}>
            <div id={style.home}>
                <NavLink to="/home" activeClassName={style.tabActive}>
                    <FontAwesomeIcon icon='home' size='2x' />
                    <p>Home</p>
                </NavLink>
            </div>
            <div id={style.explore}>
                <NavLink to="/explore" activeClassName={style.tabActive}>
                    <FontAwesomeIcon icon='crosshairs' size='2x' />
                    <p>Explore</p>
                </NavLink>
            </div>
            <div id={style.upload}>
                <NavLink to="/upload" activeClassName={style.tabActive}>
                    <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
                    <p>Upload</p>
                </NavLink>
            </div>
            <div id={style.stories}>
                <NavLink to="/stories" activeClassName={style.tabActive}>
                    <FontAwesomeIcon icon='align-left' size='2x' />
                    <p>Stories</p>
                </NavLink>
            </div>
            <div id={style.profile}>
                <NavLink to="/profile" activeClassName={style.tabActive}>
                    <FontAwesomeIcon icon='user' size='2x' />
                    <p>Profile</p>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar