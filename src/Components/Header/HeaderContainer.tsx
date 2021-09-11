import React from 'react'
import { connect } from 'react-redux'
import Header, { DispatchToProps, PropsType } from './Header'
import { logoutUser } from '../../redux/authReducer'
import { AppStateType } from '../../redux/redux-store'

class HeaderContainer extends React.Component<PropsType & DispatchToProps>{
    render(){
        return(
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect<PropsType, DispatchToProps, {}, AppStateType>(mapStateToProps, {logoutUser})(HeaderContainer)