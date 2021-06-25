import React from 'react'
import style from './Home.module.scss'
import HomeContent from './HomeContent/HomeContent'
import SideBarLeft from './SideBarLeft/sideBarLeft'
import SideBarRight from './SideBarRight/SideBarRight'

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
                <SideBarRight />
            </div>
        </section>
    )
}

export default Home