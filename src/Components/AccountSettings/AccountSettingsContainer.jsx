import React from 'react'
import { connect } from 'react-redux'
import AccountSettings from './AccountSettings'
import { updateProfile } from '../../redux/profileItemsReducer' 
import { Redirect } from 'react-router-dom'

class AccountSettingsContainer extends React.Component {
    render(){
        if(!this.props.profile){
            return <Redirect to={'/profile'} />
        }

        return(
            <AccountSettings {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return({
        profile: state.profileItems.profile,
        errors: state.profileItems.errors
    })
}

export default connect(mapStateToProps, {updateProfile})(AccountSettingsContainer)