import { connect } from 'react-redux'
import { addCommentActionCreator, onCommentChangeActionCreator } from '../../../redux/commentReducer'
import ProfileModalContent from './ProfileModalContent'

let mapStateToProps = (state) => {
    return{
        modalComments: state.modalComments,
        upload: state.upload
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        onCommentChange: (text) =>{
            dispatch(onCommentChangeActionCreator(text))
        },
        addComment: () =>{
            dispatch(addCommentActionCreator())
        }
    }
}

const ProfileModalContentContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileModalContent)

export default ProfileModalContentContainer