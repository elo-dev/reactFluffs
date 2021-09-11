import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { AppStateType } from "../../redux/redux-store";
import { actions } from "../../redux/uploadReducer";
import Upload, { MapDispatchPropsType, MapPropsType } from "./Upload";

let mapStateToProps = (state: AppStateType) => {
    return{
        upload: state.upload
    }
}

export default compose<React.ComponentType>(
    connect<MapPropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {addPost: actions.addPost}),
    withAuthRedirect
)(Upload)