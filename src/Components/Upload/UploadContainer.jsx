import { connect } from "react-redux";
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

let withRedirect = withAuthRedirect(Upload)

const UploadContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirect)

export default UploadContainer