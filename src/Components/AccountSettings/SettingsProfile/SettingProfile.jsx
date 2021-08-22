import React from 'react'
import { Field, Form } from 'react-final-form'
import formControl from '../../../hoc/formControl/formControl'
import { composeValidators, maxLength, required } from '../../../utils/validators/validator'
import style from './SettingProfile.module.scss'

const SettingProfile = (props) => {

    const Input = formControl('input')
    const TextArea = formControl('textarea')

    const onSubmit = (profile) => {
        props.updateProfile(profile)
    }

    return(
        <div className={style.settingsFormWrapper}>
            <Form onSubmit={onSubmit} initialValues={props.profile}>
                {({ handleSubmit, pristine, submitting }) => (
                <form className={style.settingsForm} onSubmit={handleSubmit}>
                    <div className={style.settingsInputWrapper}>
                        <label>Укажите ваше имя</label>
                        <Field className={style.inputName} name={'fullName'} placeholder='Ваше имя' component={Input} validate={composeValidators(required, maxLength(20))} />
                    </div>
                    <div className={style.settingsInputWrapper}>
                        <label>Вы в поиске работы ?</label>
                        <Field className={style.inputLookingForAJob} name={'lookingForAJob'} type='checkbox' component={Input} />
                    </div>
                    <div className={style.settingsInputWrapper}>
                        <label>Расскажите о ваших профессиональных качествах и умениях</label>
                        <Field className={style.inputLookingForAJobDescription} name={'lookingForAJobDescription'} placeholder='Ваши проф. качества' component={TextArea} validate={composeValidators(required, maxLength(100))} />
                    </div>
                    <div className={style.settingsInputWrapper}>
                        <label>Расскажите о себе</label>
                        <Field className={style.inputAboutMe} name={'aboutMe'} placeholder='Обо мне' component={TextArea} validate={composeValidators(required, maxLength(100))} />
                    </div>
                    <div className={style.settingsInputWrapper}>
                        <label>Другие ваши соц.сети</label>
                        {Object.keys(props.profile.contacts).map(key => {
                            return <div>
                                <p>{key}: <Field className={style.inputAboutMe} component={Input} placeholder={key} name={`contacts.${key}`} validate={maxLength(100)} /></p>
                            </div>
                        })}
                    </div>
                    <button className={style.btnSubmit} disabled={pristine || submitting}>Сохранить</button>
                    {props.errors.map(error => <strong className={style.errorSubmit}>{error}</strong>)}
                </form>
                )}
            </Form>
        </div>
    )
}

export default SettingProfile