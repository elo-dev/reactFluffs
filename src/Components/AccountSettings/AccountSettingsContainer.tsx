import React from 'react'
import { connect } from 'react-redux'
import AccountSettings from './AccountSettings'
import { updateProfile } from '../../redux/profileItemsReducer' 
import { Redirect } from 'react-router-dom'
import { ProfileType } from '../../types/types'
import { AppStateType } from '../../redux/redux-store'

type MapStatePropsType = {
    profile: ProfileType | null
}

type PropsType = MapStatePropsType

class AccountSettingsContainer extends React.Component<PropsType> {
    render(){
        if(!this.props.profile){
            return <Redirect to={'/profile'} />
        }

        return(
            <AccountSettings {...this.props} />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return({
        profile: state.profileItems.profile
        // errors: state.profileItems.errors
    })
}

export default connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps, {updateProfile})(AccountSettingsContainer)