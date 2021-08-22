import React from 'react'
import { Field, Form } from 'react-final-form'
import formControl from '../../../hoc/formControl/formControl'
import { composeValidators, maxLength, required } from '../../../utils/validators/validator'
import style from './SettingPrivacy.module.scss'

const SettingPrivacy = (props) => {

    const Input = formControl('input')

    return(
        <div className={style.settingsFormWrapper}>
            <Form onSubmit={formData => console.log(formData)}>
                {({ handleSubmit, pristine, submitting }) => (
                <form className={style.settingsForm} onSubmit={handleSubmit}>
                    <div className={style.settingsInputWrapper}>
                        <label>Включить cookie ?</label>
                        <Field className={style.saveCookie} name={'saveCookie'} type='checkbox' component={Input} />
                    </div>
                    <h2>Сменить пароль</h2>
                    <div className={style.settingsInputWrapper}>
                        <label>Введите старый пароль</label>
                        <Field className={style.oldPassword} name={'oldPassword'} placeholder='Старый пароль' component={Input} validate={composeValidators(required, maxLength(100))} />
                    </div>
                    <div className={style.settingsInputWrapper}>
                        <label>Введите новый пароль</label>
                        <Field className={style.newPassword} name={'newPassword'} placeholder='Новый пароль' component={Input} validate={composeValidators(required, maxLength(100))} />
                    </div>
                    <button className={style.btnSubmit} disabled={pristine || submitting}>Сохранить</button>
                </form>
                )}
            </Form>
        </div>
    )
}

export default SettingPrivacy