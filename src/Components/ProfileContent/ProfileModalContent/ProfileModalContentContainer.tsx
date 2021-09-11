import { connect } from 'react-redux'
import { actions } from '../../../redux/commentReducer'
import { AppStateType } from '../../../redux/redux-store'
import ProfileModalContent from './ProfileModalContent'

let mapStateToProps = (state: AppStateType) => {
    return{
        modalComments: state.modalComments,
        upload: state.upload,
    }
}

const ProfileModalContentContainer = connect(mapStateToProps, {addComment: actions.addCommentActionCreator})(ProfileModalContent)

export default ProfileModalContentContainer