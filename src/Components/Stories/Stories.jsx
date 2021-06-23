import React from 'react'
import style from './Stories.module.scss'

const Stories = () => {
    return(
        <section className={style.storiesWrapper}>
            <div className={style.stories}>
                <img className={style.storiesBackground} src="https://images.pexels.com/photos/4083720/pexels-photo-4083720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <div className={style.storiesFrom}>
                    <img src="https://images.pexels.com/photos/3819977/pexels-photo-3819977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <p className={style.storiesFromName}>name SecondName</p>
                    <p className={style.storiesFromData}>2 hours ago</p>
                </div>
            </div>
            <div className={style.stories}>
                <img className={style.storiesBackground} src="https://images.pexels.com/photos/7235671/pexels-photo-7235671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <div className={style.storiesFrom}>
                    <img src="https://images.pexels.com/photos/5792650/pexels-photo-5792650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <p className={style.storiesFromName}>name SecondName</p>
                    <p className={style.storiesFromData}>2 hours ago</p>
                </div>
            </div>
            <div className={style.stories}>
                <img className={style.storiesBackground} src="https://images.pexels.com/photos/4338256/pexels-photo-4338256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <div className={style.storiesFrom}>
                    <img src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <p className={style.storiesFromName}>name SecondName</p>
                    <p className={style.storiesFromData}>2 hours ago</p>
                </div>
            </div>
            <div className={style.stories}>
                <img className={style.storiesBackground} src="https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <div className={style.storiesFrom}>
                    <img src="https://images.pexels.com/photos/4932473/pexels-photo-4932473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <p className={style.storiesFromName}>name SecondName</p>
                    <p className={style.storiesFromData}>2 hours ago</p>
                </div>
            </div>
        </section>
    )
}

export default Stories

