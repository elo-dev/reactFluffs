import React from 'react'
import style from './Home.module.scss'
import HomeContent from './HomeContent/HomeContent'
import SideBarLeft from './SideBarLeft/sideBarLeft'
import SideBarRightContainer from './SideBarRight/SideBarRightContainer'

const Home = () => {
    return(
        <section className={style.homeWrapper}>
            <div className={style.sideBarLeft}>
                <SideBarLeft />
                <SideBarLeft />
                <SideBarLeft />
            </div>
            <div className={style.homeContent}>
                <HomeContent />
            </div>
            <div className={style.sideBarRight}>
                <SideBarRightContainer />
            </div>
        </section>
    )
}

export default Home