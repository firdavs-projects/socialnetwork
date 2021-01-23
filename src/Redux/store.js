import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state)
    },
}

export default store;
window.store = store;