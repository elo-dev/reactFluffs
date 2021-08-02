import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addPost, onChangeTextPost } from "../../redux/uploadReducer";
import Upload from "./Upload";

let mapStateToProps = (state) => {
    return{
        upload: state.upload
    }
} 

let mapDispatchToProps = (dispatch) => {
    return{
        onChangePostText: (text) => {
            dispatch(onChangeTextPost(text))
        },
        addPost: (userId) => {
            dispatch(addPost(userId))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Upload)