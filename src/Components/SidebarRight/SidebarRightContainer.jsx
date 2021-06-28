import React from 'react'
import { connect } from 'react-redux'
import SideBarRight from './SidebarRight'

let mapStateToProps = (state) => {
    return {
        profileSideBarRight: state.profileSideBar
    }
}

let mapDispatchToProps = () => {
    return{

    }
}


const SidebarRightContainer = connect(mapStateToProps, mapDispatchToProps)(SideBarRight)

export default SidebarRightContainer