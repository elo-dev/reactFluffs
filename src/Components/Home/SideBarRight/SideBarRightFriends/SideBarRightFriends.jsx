import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './SideBarRightFriends.module.scss'

class SideBarRightFriends extends React.Component{
    render(){
        return(
            <section>
                {this.props.profileSideBarRight.friends.map(u => <div className={style.friends} key={u.id}>
                    <img src={u.photo} alt="" />
                    <div className={style.friendsNameWrapper}>
                        <p className={style.friendsName}>{u.name}</p>
                        <span className={style.friendsProfileLink}>@{u.link}</span>
                    </div>
                    {u.followed
                    ? <FontAwesomeIcon className={style.deleteFriend} icon='minus' onClick={() => {this.props.unfollow(u.id)}} />
                    : <FontAwesomeIcon className={style.addFriend} icon='plus' onClick={() => {this.props.follow(u.id)}} />
                    }
                </div>)}
            </section>
        )
    }
}

export default SideBarRightFriends

// const SideBarRightFriends = (props) => {
//     return(
//         <div className={style.friends}>
//             <img src={props.photo} alt="" />
//             <div className={style.friendsNameWrapper}>
//                 <p className={style.friendsName}>{props.name}</p>
//                 <span className={style.friendsProfileLink}>@{props.link}</span>
//             </div>
//             <FontAwesomeIcon icon='plus' />
//         </div>
//     )
// }