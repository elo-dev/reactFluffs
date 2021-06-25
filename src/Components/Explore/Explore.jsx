import React from 'react'
import style from './Explore.module.scss'
import ExploreSections from './ExploreSections/ExploreSections'

const Explore = () => {
    return(
        <section className={style.exploreWrapper}>
            <div className={style.exploreTitle}>
                <h4>See All</h4>
            </div>

            <div className={style.exploreNewFriendsWrapper}>
                <div className={style.exploreNewFriends}>
                    <div className={style.exploreNewFriendsImg}>
                        <img src="https://images.pexels.com/photos/8418285/pexels-photo-8418285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.exploreNewFriendsAuthor}>
                        <img src="https://images.pexels.com/photos/4338501/pexels-photo-4338501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.exploreNewFriendsHeader}>
                        <p className={style.exploreNewFriendsName}>Name SecondName</p>
                        <p className={style.exploreNewFriendsLink}>@link</p>
                    </div>
                    <button className={style.exploreNewFriendsBtn}>Follow</button>
                </div>
                <div className={style.exploreNewFriends}>
                    <div className={style.exploreNewFriendsImg}>
                        <img src="https://images.pexels.com/photos/5745774/pexels-photo-5745774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.exploreNewFriendsAuthor}>
                        <img src="https://images.pexels.com/photos/5789510/pexels-photo-5789510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.exploreNewFriendsHeader}>
                        <p className={style.exploreNewFriendsName}>Name SecondName</p>
                        <p className={style.exploreNewFriendsLink}>@link</p>
                    </div>
                    <button className={style.exploreNewFriendsBtn}>Follow</button>
                </div>
                <div className={style.exploreNewFriends}>
                    <div className={style.exploreNewFriendsImg}>
                        <img src="https://images.pexels.com/photos/4330077/pexels-photo-4330077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.exploreNewFriendsAuthor}>
                        <img src="https://images.pexels.com/photos/4042110/pexels-photo-4042110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.exploreNewFriendsHeader}>
                        <p className={style.exploreNewFriendsName}>Name SecondName</p>
                        <p className={style.exploreNewFriendsLink}>@link</p>
                    </div>
                    <button className={style.exploreNewFriendsBtn}>Follow</button>
                </div>
                <div className={style.exploreNewFriends}>
                    <div className={style.exploreNewFriendsImg}>
                        <img src="https://images.pexels.com/photos/7561227/pexels-photo-7561227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.exploreNewFriendsAuthor}>
                        <img src="https://images.pexels.com/photos/5333092/pexels-photo-5333092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.exploreNewFriendsHeader}>
                        <p className={style.exploreNewFriendsName}>Name SecondName</p>
                        <p className={style.exploreNewFriendsLink}>@link</p>
                    </div>
                    <button className={style.exploreNewFriendsBtn}>Follow</button>
                </div>
            </div>

            <div className={style.exploreSectionsTitle}>
                <h4>Explore Section</h4>
            </div>

            <div className={style.exploreSections}>
                <ExploreSections />
                <ExploreSections />
                <ExploreSections />
                <ExploreSections />
            </div>
        </section>
    )
}

export default Explore