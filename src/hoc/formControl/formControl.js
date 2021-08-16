import React from 'react'
import style from './formControl.module.scss'

const formControl = (Component) => ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return(
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                <Component {...input} {...props} />
                {hasError && <span className={style.formError}>{meta.error}</span>}
            </div>
        </div>
    )
}

export default formControl