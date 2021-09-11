import React from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import SidebarLeft from './SidebarLeft'
import { getUsersProfile, getStatus, updateStatus, savePhoto } from '../../redux/profileItemsReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { ProfileType } from '../../types/types'
import { AppStateType } from '../../redux/redux-store'

type MapStatePropsType = {
    profile: ProfileType | null,
    authorizedUserId: number | null,
    status: string,    
}

type MapDispatchPropsType = {
    getUsersProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void,
    savePhoto: (photo: File) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

class SidebarLeftContainer extends React.Component<PropsType>{

    refreshProfile(){
        let userId: number | null = +this.props.match.params.userId
        if(!userId){
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUsersProfile(userId as number)
        this.props.getStatus(userId as number)
    }

    componentDidMount(){
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType){
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render(){
        return(
            <SidebarLeft {...this.props}
                         profile={this.props.profile}
                         status={this.props.status} 
                         updateStatus={this.props.updateStatus}
                         isOwner={!this.props.match.params.userId}
                         savePhoto={this.props.savePhoto}
                         />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profileItems.profile,
    authorizedUserId: state.auth.userId,
    status: state.profileItems.status
})

export default compose(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(SidebarLeftContainer)