import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { sendMessageCreator } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => {
            dispatch(sendMessageCreator(message))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)