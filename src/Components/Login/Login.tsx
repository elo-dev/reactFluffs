import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginForm from './LoginForm/LoginForm'
import { loginUser } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../../redux/redux-store'

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

export const LoginPage: React.FC = () => {

    const captcha = useSelector((state: AppStateType) => state.auth.captcha)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const errors = useSelector((state: AppStateType) => state.auth.errors)
    const dispatch = useDispatch()

    if(isAuth){
        return <Redirect to={'/profile'} />
    }

    const onSubmit = (formData: FormDataType) => {
        dispatch(loginUser(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    return(
        <section>
            <h1>Авторизация</h1>
            <LoginForm onSubmit={onSubmit} errors={errors} captcha={captcha} />
        </section>
    )
}