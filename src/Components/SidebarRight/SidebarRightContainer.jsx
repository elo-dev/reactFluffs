import React from 'react'
import { connect } from 'react-redux'
import SideBarRight from './SidebarRight'

let mapStateToProps = (state) => {
    return {

    }
}

let mapDispatchToProps = () => {
    return{

    }
}


const SidebarRightContainer = connect(mapStateToProps, mapDispatchToProps)(SideBarRight)

export default SidebarRightContainer