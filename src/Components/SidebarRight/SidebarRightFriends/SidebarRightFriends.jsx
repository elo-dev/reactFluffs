import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './SidebarRightFriends.module.scss'

class SideBarRightFriends extends React.Component{
    render(){
        return(
            <div>
                {this.props.profileSideBarRight.friends.map(f => <div className={style.friends}>
                    <img src={f.photo} alt="" />
                    <div className={style.friendsNameWrapper}>
                        <p className={style.friendsName}>{f.name}</p>
                        <span className={style.friendsProfileLink}>@{f.link}</span>
                    </div>
                    {f.followed 
                    ? <FontAwesomeIcon icon='minus' className={style.deleteFriend} onClick={() => this.props.unfollow(f.id)} />
                    : <FontAwesomeIcon icon='plus' className={style.addFriend} onClick={() => this.props.follow(f.id)} />
                    }
                </div>)}
            </div>
        )
    }
}

export default SideBarRightFriends