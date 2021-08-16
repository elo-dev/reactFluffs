import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm/LoginForm'
import { loginUser } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'

const Login = (props) => {

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return(
        <section>
            <h1>Авторизация</h1>
            <LoginForm loginUser={props.loginUser} />
        </section>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginUser})(Login)