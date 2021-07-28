import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './ProfileFeedItem.module.scss'
import userPhoto from '../../../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'

let ProfileFeedItem = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for(let i = 1; i <= pageCount; i++){
        pages.push(i)
    }

    return (
        <div className={style.profileFeedItemWrapper}>
            <div className={style.pageCount}>
                {pages.map(p => {
                    return <span className={`${style.notSelectedPage} ${props.currentPage === p && style.selectedPage}`} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            <div className={style.itemWrapper}>
                {props.posts.map(s => <div className={style.profileFeedItem} key={s.id}>
                    <img onClick={props.toggleModal} src={s.photos.small != null ? s.photos.small : userPhoto} alt="" />
                    {s.liked
                    ? <FontAwesomeIcon className={style.like} icon={['fas', 'heart']} onClick={() => props.unLike(s.id)} />
                    : <FontAwesomeIcon className={style.notLike} icon={['fas', 'heart']} onClick={() => props.like(s.id)} />
                    }
                    {s.bookmark
                    ? <FontAwesomeIcon className={style.bookmark} icon='bookmark' onClick={() => props.unBookmark(s.id)} />
                    : <FontAwesomeIcon className={style.unBookmark} icon='bookmark' onClick={() => props.bookmark(s.id)} />
                    }
                </div>)}
            </div>
        </div>
    )
}

export default ProfileFeedItem