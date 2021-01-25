const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    dialogs: [
        { id: 1, name: 'Firdavs' },
        { id: 2, name: 'Fedya' },
        { id: 3, name: 'Abdullo' },
        { id: 4, name: 'Ali' },
        { id: 5, name: 'Rahim' },
        { id: 6, name: 'Abdu' },
        { id: 7, name: 'Salim' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    // const stateCopy = {
    //     ...state,
    //     messages: [...state.messages]
    // }

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:

            // state.newMessageBody = action.body;
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            const body = state.newMessageBody
            const message = { id: 6, message: body };
            // state.messages.push(message)
            // state.newMessageBody = ''
            return {
                ...state,
                messages: [...state.messages, message,],
                newMessageBody: ''
            }

        default:
            return state
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer