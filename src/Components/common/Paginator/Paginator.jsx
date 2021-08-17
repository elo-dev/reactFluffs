import React from 'react'
import style from './Paginator.module.scss'

let Paginator = ({...props}) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for(let i = 1; i <= pageCount; i++){
        pages.push(i)
    }

    return(
        <div className={style.pageCount}>
        {pages.map(p => {
            return <span className={`${style.notSelectedPage} ${props.currentPage === p && style.selectedPage}`} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
        })}
        </div>
    )
}

export default Paginator