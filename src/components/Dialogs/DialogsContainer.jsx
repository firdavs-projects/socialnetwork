import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)