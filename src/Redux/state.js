const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: 'Hi', likes: 12 },
                { id: 2, post: 'How are you?', likes: 5 },
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Firdavs' },
                { id: 2, name: 'Fedya' },
                { id: 3, name: 'Abdullo' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Yo' }
            ],
            newMessageBody: ''
        },
        sideBar: {
            friends: [
                { id: 1, name: 'Firdavs' },
                { id: 1, name: 'Fedya' },
                { id: 3, name: 'Abdullo' }
            ],
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            const body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.messages.push({ id: 6, message: body })
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscriber(this._state)
        }
    },
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
})

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default store;
window.store = store;