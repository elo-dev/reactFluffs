import React from 'react'
import style from './SideBarRight.module.scss'
import SideBarRightFriendsContainer from './SideBarRightFriends/SideBarRightFriendsContainer'

const SideBarRight = (props) => {
    // let state = props.profileSideBarRight

    // let friendsElement = state.friends.map(f => <SideBarRightFriendsContainer key={f.id} id={f.id} name={f.name} photo={f.photo} link={f.link} />)

    return(
        <div className={style.sideBarRightWrapper}>
                <div className={style.friendsWrapper}>
                    <SideBarRightFriendsContainer />
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
        </div>
    )
}

export default SideBarRight