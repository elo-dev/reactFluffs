import React from 'react'
import { Field, Form } from 'react-final-form'
import formControl from '../../../hoc/formControl/formControl'
import { composeValidators, maxLength, required } from '../../../utils/validators/validator'
import style from './LoginForm.module.scss'

const LoginForm = (props) => {

    const onSubmit = (formData) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    const Input = formControl('input')

    return(
        <>
        <Form onSubmit={onSubmit}>
            {({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit} className={style.loginForm}>
                <div className={style.emailInput}>
                    <Field placeholder={'email'} type={'text'} name={'email'} component={Input} validate={required} />
                </div>
                <div className={style.passwordInput}>
                    <Field placeholder={'password'} type={'password'} name={'password'} component={Input} validate={composeValidators(required, maxLength(10))} />
                </div>
                <div>
                    <label>rememberMe</label>
                    <Field type={'checkbox'} name={'rememberMe'} component={Input} />
                </div>
                <div className={style.captcha}>
                    {props.captcha && <img src={props.captcha} /> }
                    {props.captcha && <Field component={Input} name={'captcha'} placeholder='Введите captcha' validate={required} />}
                </div>
                <button type='submit' disabled={pristine || submitting}>Войти</button>
                <strong className={style.errorField}>{props.errors}</strong>
            </form>
            )}
        </Form>
        </>
    )
}

export default LoginForm