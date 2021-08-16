import React from 'react'
import { Field, Form } from 'react-final-form'
import formControl from '../../../hoc/formControl/formControl'
import { composeValidators, maxLength, required } from '../../../utils/validators/validator'
import style from './LoginForm.module.scss'

class LoginForm extends React.Component {

    componentDidMount(){
        this.props.loginUser()
    }

    render(){

        const onSubmit = (formData) => {
            this.props.loginUser(formData.email, formData.password, formData.rememberMe)
        }

        const Input = formControl('input')

        return(
            <div>
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
                        <button type='submit' disabled={pristine || submitting}>Войти</button>
                    </form>
                    )}
                </Form>
            </div>
        )
    }
}

export default LoginForm