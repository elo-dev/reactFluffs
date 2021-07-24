import * as axios from 'axios'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './ProfileFeedItem.module.scss'
import userPhoto from '../../../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'

class Users extends React.Component{

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render(){

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for(let i = 1; i <= pageCount; i++){
            pages.push(i)
        }

        return (
            <div className={style.profileFeedItemWrapper}>
                <div className={style.pageCount}>
                    {pages.map(p => {
                        return <span className={`${style.notSelectedPage} ${this.props.currentPage === p && style.selectedPage}`} onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                <div className={style.itemWrapper}>
                    {this.props.posts.map(s => <div className={style.profileFeedItem} key={s.id}>
                        <img onClick={this.props.onClick} src={s.photos.small != null ? s.photos.small : userPhoto} alt="" />
                        {s.liked
                        ? <FontAwesomeIcon className={style.like} icon={['fas', 'heart']} onClick={() => this.props.unLike(s.id)} />
                        : <FontAwesomeIcon className={style.notLike} icon={['fas', 'heart']} onClick={() => this.props.like(s.id)} />
                        }
                        {s.bookmark
                        ? <FontAwesomeIcon className={style.bookmark} icon='bookmark' onClick={() => this.props.unBookmark(s.id)} />
                        : <FontAwesomeIcon className={style.unBookmark} icon='bookmark' onClick={() => this.props.bookmark(s.id)} />
                        }
                    </div>)}
                </div>
            </div>
        )
    }
}

export default Users