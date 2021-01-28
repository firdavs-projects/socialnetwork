import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sideBarReducer from './sideBarReducer'
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store