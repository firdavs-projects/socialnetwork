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
    return async (dispatch) => {
        const data = await profileAPI.auth()
        if (data.resultCode === 0) {
            const { id, login, email } = data.data
            dispatch(setUserData(id, email, login, true))
        }
        return data
    }
}

export const loginMe = (email, password, rememberMe) => {

    return async (dispatch) => {
        const res = await profileAPI.login(email, password, rememberMe)
        if (res.data.resultCode === 0) {
            dispatch(authMe())
        } else {
            const message = res.data.messages.length > 0
                ? res.data.messages[0]
                : 'Some error'
            const action = stopSubmit('login', { _error: message })
            dispatch(action)
        }
    }
}

export const logoutMe = () => {
    return async (dispatch) => {
        const res = await profileAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }
}

export default authReducer