import React from 'react'
import style from './Paginator.module.scss'

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
}

let Paginator: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize)

    let pages: Array<number> = []
    for(let i = 1; i <= pageCount; i++){
        pages.push(i)
    }

    return(
        <div className={style.pageCount}>
        {pages.map(p => {
            return <span className={`${style.notSelectedPage} ${currentPage === p && style.selectedPage}`} onClick={(e) => {onPageChanged(p)}}>{p}</span>
        })}
        </div>
    )
}

export default Paginator