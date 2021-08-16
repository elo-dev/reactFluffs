import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './ProfileModalContent.module.scss'
import ProfileModalComments from './ProfileModalComments/ProfileModalComments'
import { Field, Form } from 'react-final-form'
import { composeValidators, maxLength, required } from '../../../utils/validators/validator'
import formControl from '../../../hoc/formControl/formControl'

const ProfileModalContent = (props) => {

    let state = props.modalComments

    let elementsComment = state.comments.map(c => <ProfileModalComments key={c.key} id={c.id} name={c.name} comment={c.comment} data={c.data} />)

    let addComment = (value) => {
        props.addComment(value.commentTextBody)
    } 

    const Input = formControl('input')

    return(
        <div className={style.modalContentWrapper}>
            <div className={style.modalBodyLeftSide}>
                <img src="https://images.pexels.com/photos/5913194/pexels-photo-5913194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <div className={style.modalBodyLeftSideComment}>
                {props.upload.post.map(p => <p>{p.postText}</p>)}
                </div>
            </div>
            <div className={style.modalBodyRightSide}>
                <div className={style.modalBodyRightSideHeader}>
                    <div className={style.postByPhoto}>
                        <img src="https://images.pexels.com/photos/6151195/pexels-photo-6151195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                    <div className={style.postBy}>
                        <p className={style.postByName}>name SecondName</p>
                        <span className={style.postByTime}>12 hours ago</span>
                        <button className={style.addFriend}>Following</button>
                    </div>
                </div>
                <div className={style.modalBodyMessageMain}>
                    {elementsComment}
                </div>
                <div className={style.modalBodyRightSideFooter}>
                    <div className={style.modalBodyRightSideFooterSocials}>
                        <div className={style.modalBodyRightSideFooterLikes}>
                            <FontAwesomeIcon icon='heart' />
                            <span>100.000</span>
                        </div>
                        <div className={style.modalBodyRightSideFooterComments}>
                            <FontAwesomeIcon icon='comments' />
                            <span>100.000</span>
                        </div>
                    </div>
                    <div className={style.modalBodyRightSideFooterAddComment}>
                        <span className={style.avatarComment}>
                            <img src="https://images.pexels.com/photos/7120688/pexels-photo-7120688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                        </span>
                        <Form onSubmit={addComment}>
                            {({handleSubmit, form}) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <Field className={style.inputDirty} component={Input} type={'text'} placeholder={'Введите комментарий'} name={'commentTextBody'} validate={composeValidators(required, maxLength(100))} />
                                </div>
                            </form>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileModalContent