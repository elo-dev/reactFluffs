import { connect } from "react-redux";
import { addPost, onChangeTextPost } from "../../redux/uploadReducer";
import Upload from "./Upload";

let mapStateToProps = (state) => {
    return{
        upload: state.upload,
        isAuth: state.auth.isAuth
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

const UploadContainer = connect(mapStateToProps, mapDispatchToProps)(Upload)

export default UploadContainer