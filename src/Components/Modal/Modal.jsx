import React from 'react'
import style from './Modal.module.scss'

const Modal = ({active, setActive, children}) => {
    return(
        <div className={active ? style.modal + ' ' + style.active : style.modal} onClick={() => setActive(false)} >
            <div className={active ? style.modalBody + ' ' + style.active : style.modalBody} onClick={e => e.stopPropagation()} >
                {children}
            </div>
        </div>
    )
}

export default Modal