import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Field, Form } from 'react-final-form'
import { Redirect } from 'react-router-dom'
import style from './Upload.module.scss'
import formControl from '../../hoc/formControl/formControl'
import { composeValidators, maxLength, required } from '../../utils/validators/validator'

const Upload = (props) => {

    let addPost = (value) => {
        props.addPost(value.uploadText)
    }

    if(!props.isAuth) return <Redirect to={'/login'} />

    const Textarea = formControl('textarea')

    return(
        <section className={style.uploadWrapper}>
            <div className={style.uploadForm}>
                <Form onSubmit={addPost}>
                {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field component={Textarea} name={'uploadText'} type='textarea' className={style.uploadInput} placeholder="Type something..." validate={composeValidators(required, maxLength(100))} />
                    <div className={style.uploadItemsWrapper}>
                        <div className={style.uploadItems}>
                            <FontAwesomeIcon icon='camera' />
                            <FontAwesomeIcon icon='video' />
                        </div>
                        <button className={style.uploadBtn}>Upload</button>
                    </div>
                </form>
                )}
                </Form>
            </div>

            <div className={style.uploadFilterTitle}>
                <h4>Instagram Filters</h4>
            </div>

            <div className={style.uploadFilterWrapper}>
                <div className={style.uploadFilter}>
                    <div className={style.uploadFilterImg}>
                        <img className={style.uploadFilterNormal} src="https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.uploadFilterHeader}>
                        <p>Normal</p>
                    </div>
                </div>
                <div className={style.uploadFilter}>
                    <div className={style.uploadFilterImg}>
                        <img className={style.uploadFilter1977} src="https://images.pexels.com/photos/738919/pexels-photo-738919.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    </div>
                    <div className={style.uploadFilterHeader}>
                        <p>1977</p>
                    </div>
                </div>
                <div className={style.uploadFilter}>
                    <div className={style.uploadFilterImg}>
                        <img className={style.uploadFilterWillow} src="https://images.pexels.com/photos/2106334/pexels-photo-2106334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.uploadFilterHeader}>
                        <p>Willow</p>
                    </div>
                </div>
                <div className={style.uploadFilter}>
                    <div className={style.uploadFilterImg}>
                        <img className={style.uploadFilterBrannan} src="https://images.pexels.com/photos/2876738/pexels-photo-2876738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.uploadFilterHeader}>
                        <p>Sutro</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Upload