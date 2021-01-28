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
        profileAPI.auth()
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
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(authMe())
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