import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import style from './Navbar.module.scss'

const Navbar = () => {
    return(
        <nav className={style.appNavbar}>
            <div id={style.home}>
                <a href="">
                <FontAwesomeIcon icon='home' size='2x' />
                <p>Home</p>
                </a>
            </div>
            <div id={style.explore}>
                <a href="">
                <FontAwesomeIcon icon='crosshairs' size='2x' />
                <p>Explore</p>
                </a>
            </div>
            <div id={style.upload}>
                <a href="">
                <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
                <p>Upload</p>
                </a>
            </div>
            <div id={style.stories}>
                <a href="">
                <FontAwesomeIcon icon='align-left' size='2x' />
                <p>Stories</p>
                </a>
            </div>
            <div id={style.profile}>
                <a href="">
                <FontAwesomeIcon icon='user' size='2x' />
                <p>Profile</p>
                </a>
            </div>
        </nav>
    )
}

export default Navbar