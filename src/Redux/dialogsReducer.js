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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            const body = action.payload
            const message = { id: 6, message: body };
            return {
                ...state,
                messages: [...state.messages, message,],
            }

        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    payload: newMessageBody
})

export default dialogsReducer