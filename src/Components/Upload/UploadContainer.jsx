import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addPost } from "../../redux/uploadReducer";
import Upload from "./Upload";

let mapStateToProps = (state) => {
    return{
        upload: state.upload
    }
} 

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: (uploadText) => {
            dispatch(addPost(uploadText))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Upload)