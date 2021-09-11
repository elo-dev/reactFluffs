import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm/LoginForm'
import { loginUser } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../../redux/redux-store'

type MapStatePropsType = {
    isAuth: boolean,
    captcha: string | null,
    errors: string | null
}

type MapDispatchPropsType = {
    loginUser: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const Login: React.FC<PropsType> = (props) => {

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return(
        <section>
            <h1>Авторизация</h1>
            <LoginForm errors={props.errors} loginUser={props.loginUser} captcha={props.captcha} />
        </section>
    )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
    errors: state.auth.errors
})

export default connect(mapStateToProps, {loginUser})(Login)