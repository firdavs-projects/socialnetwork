import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogsReducer'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs'

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                const state = store.getState()

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }

                const onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }

                return (
                    <Dialogs
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        state={state.dialogsPage}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer