import { stopSubmit } from "redux-form";
import { profileAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }

        default:
            return state
    }
}

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
})

export const authMe = () => {
    return (dispatch) => {
       return profileAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    const { id, login, email } = data.data
                    dispatch(setUserData(id, email, login, true))
                }
            })
    }
}

export const loginMe = (email, password, rememberMe) => {

    return (dispatch) => {
        profileAPI.login(email, password, rememberMe)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(authMe())
                } else {
                    const message = res.data.messages.length > 0
                        ? res.data.messages[0]
                        : 'Some error'
                    const action = stopSubmit('login', { _error: message })
                    dispatch(action)
                }
            })
    }
}

export const logoutMe = () => {
    return (dispatch) => {
        profileAPI.logout()
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            })
    }
}

export default authReducer